import { types } from "./types";

export function addReview(review: any) {
    return {
        type: types.ADD_REVIEW,
        payload: { review },
    };
}