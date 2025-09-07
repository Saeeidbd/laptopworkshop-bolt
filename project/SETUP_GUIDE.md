# Laptop Workshop - Google Drive File Management Guide

## 📁 Using Google Drive for File Hosting

Instead of hosting files locally, you can use Google Drive to host your downloadable files. This provides better reliability, unlimited storage, and easier management.

## 🔧 How to Add New Files with Google Drive

### Step 1: Upload Files to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Create folders for organization (optional):
   - **BIOS Files**
   - **Schematics** 
   - **Boardview Files**
3. Upload your files to the appropriate folders

### Step 2: Get Shareable Links
1. Right-click on your uploaded file
2. Select **"Get link"** or **"Share"**
3. Change permissions to **"Anyone with the link can view"**
4. Copy the shareable link
5. The link will look like: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`

### Step 3: Update the File Database
1. Open `src/pages/Downloads.tsx`
2. Find the `downloadFiles` array
3. Add a new object with these properties:

```typescript
{
  id: 8, // Use next available number
  name: 'Your Laptop Model BIOS',
  category: 'bios', // 'bios', 'schematic', or 'boardview'
  brand: 'Dell', // Laptop brand
  model: 'XPS 15 9520', // Laptop model
  size: '12.4 MB', // File size
  format: 'BIN', // File format
  downloads: 0, // Start with 0
  uploadDate: '2024-01-25', // Upload date (YYYY-MM-DD)
  description: 'Description of the file',
  fileUrl: 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing' // Google Drive link
}
```

## 📝 File Naming Convention

Use descriptive names with brand and model:
- `dell_xps_15_9520_bios.bin`
- `hp_pavilion_15_cs3000_schematic.pdf`
- `lenovo_thinkpad_x1_carbon_boardview.brd`

## ✅ Supported File Types

| Category | File Extensions | Description |
|----------|----------------|-------------|
| BIOS | .bin, .rom, .cap | BIOS firmware files |
| Schematics | .pdf | Circuit diagrams |
| Boardview | .brd, .bv | Board layout files |

## 🚀 Quick Example with Google Drive

Let's say you want to add a new Dell Inspiron BIOS file using Google Drive:

1. **Upload to Google Drive**: Upload `dell_inspiron_15_3000_bios.bin` to your Google Drive
2. **Get shareable link**: Right-click → Share → Copy link
3. **Make it public**: Set permissions to "Anyone with the link can view"

4. **Add to database**: In `src/pages/Downloads.tsx`, add:
```typescript
{
  id: 8,
  name: 'Dell Inspiron 15 3000 BIOS',
  category: 'bios',
  brand: 'Dell',
  model: 'Inspiron 15 3000',
  size: '9.8 MB',
  format: 'BIN',
  downloads: 0,
  uploadDate: '2024-01-25',
  description: 'Latest BIOS update for Dell Inspiron 15 3000 series',
  fileUrl: 'https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view?usp=sharing'
}
```

5. **Save and refresh**: The file will appear on your Downloads page!

## 🔍 Benefits of Google Drive Hosting

- **Unlimited Storage**: No server storage limits
- **Reliable Downloads**: Google's infrastructure ensures fast, reliable downloads
- **Easy Management**: Upload, organize, and manage files through Google Drive interface
- **Version Control**: Easy to update files by replacing them in Google Drive
- **Analytics**: Google Drive provides download statistics

## 📊 Download Statistics & Management

- Download counters are currently static (stored in the code)
- File sizes and upload dates are displayed automatically
- You can easily update file information by editing the `downloadFiles` array
- To update a file, simply replace it in Google Drive (the link stays the same)

## 🛠️ Advanced: Dynamic File Management

For a more robust solution with dynamic file management, you could:
1. Set up a Supabase database to store file metadata
2. Use Google Drive API to automatically sync file information
3. Create an admin interface to manage files without editing code

This would allow you to manage files through an admin interface without manually editing code.

## 📞 Need Help?

If you need assistance adding files or encounter any issues:
- Check that file paths match exactly
- Ensure files are in the correct folders
- Verify file extensions are supported
- Contact: abusaeeid@gmail.com