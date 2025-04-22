// This is a placeholder for future Google Photos integration
export const GooglePhotosAdapter = {
  getThumbnail: (image) => image.baseUrl + '=w500-h500',
  getFullSizeImage: (image) => image.baseUrl,
  transformData: (data) => {
    // Transform Google Photos API response to match gallery format
    return data?.mediaItems || [];
  }
};