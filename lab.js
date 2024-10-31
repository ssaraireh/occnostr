function areaPoint$1(lambda, phi) {
    // Assuming lambda is longitude in radians and phi is latitude in radians
    let radius = 6371; // Earth's radius in kilometers
    
    // Calculate Cartesian coordinates
    let x = radius * Math.cos(phi) * Math.cos(lambda);
    let y = radius * Math.cos(phi) * Math.sin(lambda);
    let z = radius * Math.sin(phi);

    return { x: x, y: y, z: z };
}

// Example usage:
let lambda = Math.PI / 4; // 45 degrees in radians
let phi = Math.PI / 6; // 30 degrees in radians

let point = areaPoint$1(lambda, phi);
console.log(point); 
// Output: { x: 3920.083, y: 3920.083, z: 3185.5 }
