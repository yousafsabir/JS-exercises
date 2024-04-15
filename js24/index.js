// kata: https://www.codewars.com/kata/58298e19c983caf4ba000c8d/train/javascript

const normalWeathers = ["clear", "sunny", "cloudy", "overcast", "windy"];
const rainyWeathers = ["rainy", "thunderstorms"];

function minUmbrellas(weather) {
    let iAmAt = "home";
    let umbrellas = {
        home: 0,
        office: 0,
    };
    for (let forecast of weather) {
        if (rainyWeathers.includes(forecast)) {
            // * Check if have no umbrella at current location
            if (!umbrellas[iAmAt]) {
                umbrellas[iAmAt] += 1;
            }

            // * subtracting & moving umbrellas
            umbrellas[iAmAt] -= 1;
            umbrellas[iAmAt === "home" ? "office" : "home"] += 1;
        }

        // * changing location
        iAmAt = iAmAt === "home" ? "office" : "home";
    }
    return umbrellas.home + umbrellas.office;
}

console.log(
    minUmbrellas([
        "windy",
        "rainy", // 1
        "cloudy",
        "rainy",
        "rainy",
        "windy",
        "windy",
        "thunderstorms",
        "thunderstorms",
        "windy",
    ])
);
// console.log(minUmbrellas(["overcast", "rainy", "clear", "thunderstorms"]));
// console.log(minUmbrellas(["rainy", "rainy", "rainy", "rainy"]));
// console.log(minUmbrellas(["rainy", "clear", "rainy", "cloudy"]));
