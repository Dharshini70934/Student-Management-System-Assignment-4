let students = [];

const nameInput = document.getElementById("name");
const addressInput = document.getElementById("address");
const batchInput = document.getElementById("batch");

const tableBody = document.getElementById("studentTableBody");

const totalCount = document.getElementById("totalCount");
const b002Count = document.getElementById("b002Count");


// ADD STUDENT FUNCTION
function addStudent() {

    const name = nameInput.value.trim();
    const address = addressInput.value.trim();
    const batch = batchInput.value.trim();

    // Validation
    if(name === "" || address === "" || batch === "") {
        alert("Please fill all fields");
        return;
    }

    // Create student object
    const student = {
        name,
        address,
        batch
    };

    students.push(student);

    displayStudents();

    // Clear inputs
    nameInput.value = "";
    addressInput.value = "";
    batchInput.value = "";

    nameInput.focus();
}


// DISPLAY STUDENTS
function displayStudents() {

    tableBody.innerHTML = "";

    students.forEach((student, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.address}</td>
            <td>${student.batch}</td>
            <td>
              <button class="delete-btn" onclick="deleteStudent(${index})">
                Delete
              </button>
            </td>
        `;

        tableBody.appendChild(row);

    });

    updateCounts();
}


// DELETE STUDENT
function deleteStudent(index) {

    const confirmDelete = confirm("Are you sure you want to delete this student?");

    if(confirmDelete) {

        students.splice(index, 1);

        displayStudents();
    }
}


// UPDATE COUNTS
function updateCounts() {

    totalCount.textContent = students.length;

    let countB002 = 0;

    students.forEach(student => {

        if(student.batch.toUpperCase() === "B002") {
            countB002++;
        }

    });

    b002Count.textContent = countB002;
}


// ENTER KEY EVENT ON BATCH FIELD
batchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter") {
        addStudent();
    }

});
