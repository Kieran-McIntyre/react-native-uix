import * as React from "react";
import { useState, useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Attachment from "../../../models/Attachment";
import chunkArray from "../../../utils/chunkArray";
import colors from "../../../values/colors";
import ModalViewImage from "../../Molecules/ModalViewImage";

export interface Props {
  images: Attachment[];
}

const isPromise = (value: any) => !!value && typeof value?.then === "function";

const ImageCell = ({
  style,
  url,
  onPress,
}: {
  style: any;
  url: string | Promise<string>;
  onPress: any;
}) => {
  const [imageUrl, setImageUrl] = useState<string|null>(null);

  useEffect(() => {
    const onFetchUrl = async () => {
      if (isPromise(url)) {
        const fetchedUrl: string = await (url as Promise<string>);
        setImageUrl(fetchedUrl);
      } else {
        setImageUrl(url as string);
      }
    };

    onFetchUrl();
  }, []);

  if (!imageUrl) {
    return <View style={[styles.imageCell, styles.imageCellLoading, style]} />;
  }

  return (
    <View style={[styles.imageCell, styles.imageCellLoaded, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={{ uri: imageUrl!, cache: "force-cache" }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

const ImageGallery = ({ images }: Props) => {
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [isImageGalleryVisible, setImageGalleryVisible] = useState(false);

  useEffect(() => {
    const setImages = async () => {
      const newAttachments = await Promise.all(
        images.map(
          async (image) =>
            new Attachment({
              ...image,
              url: await image.url,
            })
        )
      );

      setAttachments(newAttachments);
    };

    setImages();
  }, [images]);

  const imageRows = chunkArray(attachments, 2);
  const imageUrls = attachments.map((image) => image.url as string);

  return (
    <View>
      <View>
        {imageRows.map((row: any, i: number) => (
          <View style={styles.imageRow} key={`${i}-${row[0].id}`}>
            {row.map((image: any, i: number) => {
              const isFirstImage = i === 0;
              const spacingStyle = !isFirstImage && styles.imageCellSpacing;

              return (
                <ImageCell
                  style={spacingStyle}
                  key={image.id}
                  url={image.url}
                  onPress={() => setImageGalleryVisible(true)}
                />
              );
            })}
          </View>
        ))}
      </View>

      <ModalViewImage
        visible={isImageGalleryVisible}
        onDismiss={() => setImageGalleryVisible(false)}
        imageUrls={imageUrls}
      />
    </View>
  );
};

export default ImageGallery;

const styles = StyleSheet.create({
  imageCell: {
    flex: 1,
    height: 200,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light.neutral,
  },

  imageCellSpacing: {
    marginLeft: 10,
  },

  imageRow: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
  },

  imageCellLoading: {
    backgroundColor: "green",
  },

  imageCellLoaded: {
    backgroundColor: "pink",
  },
});
