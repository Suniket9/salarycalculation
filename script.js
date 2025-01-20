document.getElementById("submit-btn").addEventListener("click", function () {
    const experience = parseFloat(document.getElementById("experience").value);
    const salary = parseFloat(document.getElementById("salary").value);
    const designation = document.getElementById("designation").value.toLowerCase();
    const cityType = document.getElementById("city").value.toLowerCase();
    const resultDiv = document.getElementById("result");

    if (isNaN(experience) || isNaN(salary) || !designation || !cityType) {
        resultDiv.textContent = "Please fill out all fields correctly.";
        return;
    }

    let newSalary;

    if (designation === "frontend development" || designation === "backend development") {
        if (experience === 0) {
            if (cityType === "tier-1") {
                newSalary = 5;
            } else if (cityType === "tier-2") {
                newSalary = 4;
            } else if (cityType === "tier-3") {
                newSalary = 3.25;
            }
        } else if (experience >= 1 && experience <= 4) {
            if (cityType === "tier-1") {
                newSalary = 1.2 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.18 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.15 * salary;
            }
        } else if (experience >= 5 && experience <= 7) {
            if (cityType === "tier-1") {
                newSalary = 1.25 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.22 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.18 * salary;
            }
        } else if (experience >= 8) {
            if (cityType === "tier-1") {
                newSalary = 1.3 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.25 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.2 * salary;
            }
        }
    } else if (designation === "mean stack" || designation === "mern stack" || designation === "full stack") {
        if (experience === 0) {
            if (cityType === "tier-1") {
                newSalary = 5;
            } else if (cityType === "tier-2") {
                newSalary = 4;
            } else if (cityType === "tier-3") {
                newSalary = 3.25;
            }
        } else if (experience >= 1 && experience <= 4) {
            if (cityType === "tier-1") {
                newSalary = 1.2 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.18 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.15 * salary;
            }
        } else if (experience >= 5 && experience <= 7) {
            if (cityType === "tier-1") {
                newSalary = 1.25 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.22 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.18 * salary;
            }
        } else if (experience >= 8) {
            if (cityType === "tier-1") {
                newSalary = 1.3 * salary;
            } else if (cityType === "tier-2") {
                newSalary = 1.25 * salary;
            } else if (cityType === "tier-3") {
                newSalary = 1.2 * salary;
            }
        }
    }

    if (newSalary) {
        resultDiv.textContent = `Your estimated salary is: ₹${newSalary.toFixed(2)} LPA`;
    } else {
        resultDiv.textContent = "Invalid input or unsupported designation/city type.";
    }
});
