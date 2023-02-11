let Name = prompt("שם:");
let Email = prompt("אימייל:");
let Age = prompt("גיל:");
let Gender = prompt("מין (זכר/נקבה):");
let Newsletter = confirm("האם תרצה/י להירשם לרשימת התפוצה שלנו?");

if (Name == " ") {
  alert(Email);
}
if (Email == " ") {
  alert(Age);
}

if (Age <= 4) {
  alert("הא הא");
} else if (4 < Age && Age <= 10) {
  alert("ילד טוב");
} else if (10 < Age && Age <= 18) {
  alert("גיל העשרה");
} else if (Age > 18) {
  alert("החיים הבוגרים");
} else if (!Number.isNaN(Age)) {
  alert("הכנס מספר בלבד");
}

if (Gender === "זכר") {
  alert("ברוך הבא" + " " + Name);
} else if (Gender === "נקבה") {
  alert("ברוכה הבאה" + " " + Name);
} else {
  alert("הכנס זכר/נקבה בלבד");
}

if (Newsletter) {
  alert("תודה! האימייל שלך נוסף בהצלחה לרשימת התפוצה");
} else {
  alert("לא נרשמת");
}
