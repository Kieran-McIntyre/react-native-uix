#!bin/sh

show_package_manager_menu(){
    PS3='Please enter your choice:'
    options=("NPM" "Yarn")

    select opt in "${options[@]}"
    do
        case $opt in
            "NPM")
                install_dependencies "NPM" "npm install"
                break
                ;;
            "Yarn")
                install_dependencies "Yarn" "yarn add"
                break
                ;;
            *) printf "\e[31m$REPLY is an Invalid Option.\n\n\e[0m";;
        esac
    done
}

install_dependencies(){
    printf "\n\nInstalling the Peer Dependencies using $1...\n\n"

    $2 @react-native-community/masked-view@0.1.10\
        @react-navigation/bottom-tabs@5.8.0\
        @react-navigation/native@5.7.3\
        @react-navigation/stack@5.9.0\
        react-native-gesture-handler@1.8.0\
        react-native-parallax-scroll-view@0.21.3\
        react-native-reanimated@1.13.0\
        react-native-safe-area-context@3.1.7\
        react-native-screens@2.10.1\
        react-native-snap-carousel@3.9.1\
        react-native-svg@12.1.0\
        @fortawesome/fontawesome-svg-core@1.2.30\
        @fortawesome/free-brands-svg-icons@5.14.0\
        @fortawesome/free-solid-svg-icons@5.14.0\
        @fortawesome/react-native-fontawesome@0.2.5\
        @react-native-community/segmented-control@2.1.1\
        react-native-actionsheet@2.4.2\
        react-native-webview@8.1.2\
        react-native-render-html@4.2.0\
        react-native-image-zoom-viewer@2.2.27\
        react-native-swipe-list-view@3.2.4\
        date-fns@2.9.0
}

clear

printf "Thank you for choosing \e[36;3mreact-native-uix\e[0m! Which package manager would you like to use to install the Peer Dependencies? \n\n"

show_package_manager_menu

printf "\e[32mFinished! The Peer Dependencies have successfully been installed.\n\n\e[0m"

