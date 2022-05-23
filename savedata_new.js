

function saveData() {

    let Name, Degree, Age, Profile, Contact, Gender, PassYear, Email, Status, Course_Start_Date, Course_End_Date, DOB, Cgpa;

    Name = document.getElementById("Name").value;
    if ($("input[type='radio']:checked").val() == "Male") {
        Gender = "Male";
    }
    else if ($("input[type='radio']:checked").val() == "Female") {
        Gender = "Female";
    }
    Degree = document.getElementById("Degree").value;
    PassYear = document.getElementById("year_of_Passing").value;
    Contact = document.getElementById("Contact").value;
    Email = document.getElementById("Email").value;
    Age = document.getElementById("Age").value;
    Cgpa = document.getElementById("Cgpa").value;
    Profile = document.getElementById("Profile").files[0].name;

    // Profile = `<img src= 'C:/Users/SYS-5-ADMIN/Aravind/images/${Profile}' width=100% height=10% class="imag">`;
    Profile = `<img src= 'F:/Aravind/New folder/New folder/images/${Profile}' width=100% height=10% class="imag">`;
    let date1 = new Date();
    let date2 = new Date($("#Course_End_Date").val());

    if (date2 < date1) {
        Status = "Completed";
    }
    else {
        Status = "Incomplete";
    }
    Course_End_Date = document.getElementById("Course_End_Date").value;
    Course_Start_Date = document.getElementById("Course_Start_Date").value;
    DOB = document.getElementById("DOB").value;
    Cgpa = document.getElementById('Cgpa').value;

    console.log("new" + abcd);

    let data = [Name, Gender, Degree, PassYear, Contact, Email, Age, Profile, Status, Course_End_Date, Course_Start_Date, DOB, Cgpa];
    if (abcd < 0) {

        let info = JSON.parse(localStorage.getItem("info")) || [];
        let content = $('#mytable').DataTable();
        info.push(data);
        content.row.add(data).draw();

        localStorage.setItem("info", JSON.stringify(info));
    }
    else {
        localData.splice(abcd, 1, data);

        localStorage.setItem("info", JSON.stringify(localData));
        content.row(abcd).data(data).draw();
        abcd = -1;
    }

    resett();

}
function resett() {
    // document.getElementById("Name").value = "";
    document.getElementById("Name").value = "";
    document.getElementById("Course_Start_Date").value = "";
    document.getElementById("Course_End_Date").value = "";
    document.getElementById("Cgpa").value = "";
    document.getElementById("DOB").value = "";
    document.getElementById("Age").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Contact").value = "";
    // document.getElementById("Certification1").value = "";
    document.getElementById("year_of_Passing").value = "";
    document.getElementById("Degree").value = "";

    $('input[name="Radio_btn"]').prop('checked', false);
    // $('#Profile').val() = "";
    document.getElementById("Profile").value = "";

}





