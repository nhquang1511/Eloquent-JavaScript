let triangle = '';
for (let i = 1; i <= 7; i++) {
  triangle += '#';
  console.log(triangle);
}

// book's solution
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
