function trafficLightControl(density) {
    switch (density.toLowerCase()) {
        case "heavy traffic":
            return 73;
        case "moderate traffic":
            return 55;
        case "light traffic":
            return 24;
        default:
            return "Invalid traffic density";
    }
}

// Example usage:
console.log(trafficLightControl("Heavy Traffic")); // 
console.log(trafficLightControl("Moderate Traffic")); // 
console.log(trafficLightControl("Light Traffic")); // 
console.log(trafficLightControl("No Traffic")); // 
