// File management utilities for Laptop Workshop

export interface DownloadFile {
  id: number;
  name: string;
  category: 'bios' | 'schematic' | 'boardview';
  brand: string;
  model: string;
  size: string;
  format: string;
  downloads: number;
  uploadDate: string;
  description: string;
  fileUrl: string;
}

// Helper function to generate file URL based on category and filename
export const generateFileUrl = (category: string, filename: string): string => {
  const categoryFolder = category === 'schematic' ? 'schematics' : category;
  return `/downloads/${categoryFolder}/${filename}`;
};

// Helper function to validate file existence
export const checkFileExists = async (fileUrl: string): Promise<boolean> => {
  try {
    const response = await fetch(fileUrl, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};

// Helper function to format file size
export const formatFileSize = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  if (bytes === 0) return '0 Bytes';
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return Math.round(bytes / Math.pow(1024, i) * 100) / 100 + ' ' + sizes[i];
};

// Helper function to get file extension
export const getFileExtension = (filename: string): string => {
  return filename.split('.').pop()?.toLowerCase() || '';
};

// Helper function to validate file type based on category
export const isValidFileType = (category: string, filename: string): boolean => {
  const extension = getFileExtension(filename);
  
  switch (category) {
    case 'bios':
      return ['bin', 'rom', 'cap'].includes(extension);
    case 'schematic':
      return ['pdf'].includes(extension);
    case 'boardview':
      return ['brd', 'bv'].includes(extension);
    default:
      return false;
  }
};