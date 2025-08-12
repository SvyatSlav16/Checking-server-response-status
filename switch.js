console.log("Checking server response status:")
let x = 200

switch (x){
    case 200: {
        console.log("✅ Success: Data received.")
        break
    }
    case 301: {
        console.log("🔀 Redirect: Resource has moved.")
        break
    }
    case 404: {
        console.log("❌ Error: Resource not found.")
        break
    }
    case 500: {
        console.log("💥 Server Error: Something went wrong.")
        break
    }
    default: {
        console.log("⚠️ Unknown status code.")
        break
    }
}