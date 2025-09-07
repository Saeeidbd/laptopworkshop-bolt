# Downloads Folder

This folder contains all downloadable files for the Laptop Workshop website.

## Folder Structure:
- `/bios/` - BIOS files (.bin, .rom, .cap files)
- `/schematics/` - Schematic diagrams (.pdf files)
- `/boardview/` - Boardview files (.brd, .bv files)

## Adding New Files:
1. Place your files in the appropriate subfolder
2. Update the `downloadFiles` array in `src/pages/Downloads.tsx`
3. Add the correct `fileUrl` path pointing to your file

## File Naming Convention:
Use descriptive names with brand and model:
- `dell_xps_13_9310_bios.bin`
- `hp_pavilion_15_cs3000_schematic.pdf`
- `lenovo_thinkpad_x1_carbon_boardview.brd`

## Supported File Types:
- BIOS: .bin, .rom, .cap
- Schematics: .pdf
- Boardview: .brd, .bv