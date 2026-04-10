const colors = [
    "from-yellow-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-cyan-500"
  ];

  const toColors = [
    "to-yellow-500",
    "to-blue-500",
    "to-green-500",
    "to-red-500",
    "to-cyan-500"
  ];

  export function getGradient() {
    let colour1 = Math.floor(Math.random() * colors.length);
    let colour2 = Math.floor(Math.random() * toColors.length);

    while (colour2 === colour1) {
      colour2 = Math.floor(Math.random() * toColors.length);
    }
    return `${colors[colour1]} ${toColors[colour2]}`;
  }