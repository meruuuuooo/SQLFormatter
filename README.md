# SQL Formatter

A modern, web-based SQL formatter with real-time preview and customizable styling options. This tool helps developers format their SQL queries with proper indentation, keyword capitalization, and syntax highlighting.

## 🚀 Features

- **Real-time SQL Formatting** - Format SQL queries instantly as you type
- **Customizable Appearance** - Personalize your formatted output with:
  - Font color selection
  - Background color selection
  - Multiple font family options (Courier New, Fira Code, Source Code Pro, Roboto Mono)
  - Adjustable font size (10px - 24px)
  - Bold text toggle
  - Line numbers toggle
- **Export Options** - Copy formatted SQL as text or download/copy as PNG image
- **Clean UI** - Modern, responsive design with dark theme
- **Accessibility** - Full keyboard navigation and screen reader support

## 🛠️ Technologies Used

- **React** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Vite** - Fast build tool and development server
- **sql-formatter** - SQL parsing and formatting library
- **html-to-image** - Convert formatted SQL to downloadable images

## 📋 Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/meruuuuooo/sql-formatter.git
   cd sql-formatter
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Building for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## 🎯 How to Use

### Basic Usage

1. **Input SQL Query**
   - Paste or type your SQL query in the left panel input area
   - The formatter accepts any valid SQL syntax

2. **Format SQL**
   - Click the "Format SQL" button to process your query
   - The formatted result appears instantly in the right preview panel

3. **Customize Appearance**
   Use the Settings panel to customize the output:
   - **Font Color**: Click the color picker to change text color
   - **Background Color**: Select background color for the preview
   - **Font Family**: Choose from 4 monospace fonts optimized for code
   - **Font Size**: Adjust size using the slider (10-24px)
   - **Bold Text**: Toggle to make text bold or normal weight
   - **Line Numbers**: Show/hide line numbers in the preview

4. **Export Formatted SQL**
   - **Copy Text**: Copy the formatted SQL to clipboard
   - **Copy PNG**: Copy the formatted SQL as an image to clipboard
   - **Download PNG**: Download the formatted SQL as a PNG file

### Example

**Input:**

```sql
select p.product_id,p.product_name,p.price from products p where p.price>50 order by p.price desc;
```

**Formatted Output:**

![alt text](image.png)

## 🎨 Customization Options

### Font Families

- **Courier New** - Classic monospace font
- **Fira Code** - Modern programming font with ligatures
- **Source Code Pro** - Adobe's open-source monospace font
- **Roboto Mono** - Google's monospace font

### Color Themes

- Fully customizable foreground and background colors
- Default: Light gray text on dark background for reduced eye strain
- Support for any hex color values

### Display Options

- **Line Numbers**: Toggle line numbers on/off for cleaner appearance
- **Bold Text**: Make code more prominent with bold formatting
- **Font Size**: Scale text from 10px to 24px for optimal readability

## 🏗️ Project Structure

```text
SQLFormatter/
├── components/           # React components
│   ├── Controls.tsx     # Settings panel component
│   ├── Footer.tsx       # Footer with links and QR code
│   ├── Header.tsx       # Application header
│   ├── Preview.tsx      # Formatted SQL preview component
│   └── SqlInput.tsx     # SQL input component
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # This file
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Made by meru using Google Builder AI

- GitHub: [@meruuuuooo](https://github.com/meruuuuooo)
- Email: <mailem.meldavid@gmail.com>

## 🙏 Acknowledgments

- Built with [Google AI Studio](https://ai.studio)
- SQL formatting powered by [sql-formatter](https://github.com/sql-formatter-org/sql-formatter)
- UI components styled with [Tailwind CSS](https://tailwindcss.com)

---

If you find this tool helpful, consider buying me a coffee! Scan the QR code in the app footer. ☕
