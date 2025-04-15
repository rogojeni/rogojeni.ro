// This is a placeholder for future Instagram integration
export const InstagramGalleryAdapter = {
  getThumbnail: (image) => image.thumbnail_url,
  getFullSizeImage: (image) => image.media_url,
  transformData: (data) => {
    // Transform Instagram API response to match gallery format
    return data?.media?.data || [];
  }
};