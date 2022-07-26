const twoDimensionalArray = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["o", "o", "x"],
];

// get top left corner
twoDimensionalArray[0][0];

// get middle
twoDimensionalArray[1][1];

// get bottom left corner
twoDimensionalArray[2][0];

for (let row of twoDimensionalArray) {
  for (let element of row) {
    console.log(element);
  }
}

const googleApiResponse = {
  destination_addresses: ["Philadelphia, PA, USA"],
  origin_addresses: ["New York, NY, USA"],
  rows: [
    {
      elements: [
        {
          distance: {
            text: "94.6 mi",
            value: 152193,
          },
          duration: {
            text: "1 hour 44 mins",
            value: 6227,
          },
          status: "OK",
        },
      ],
    },
  ],
  status: "OK",
};

console.log(googleApiResponse.rows[0].elements[0].distance.text);
console.log(googleApiResponse.rows[0].elements[0].distance.value);

// array destructuring
const array = [1, 2, 3];
const [pizza, second] = array;

const {
  rows: [
    {
      elements: [
        {
          distance: { text, value },
        },
      ],
    },
  ],
} = googleApiResponse;

console.log(text, value);
