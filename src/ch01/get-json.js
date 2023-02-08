getJSON(
  "/students",
  (students) => {
    getJSON(
      "/students/grades",
      (grades) => processGrades(grades),
      (error) => console.log(error.message)
    );
  },
  (error) => console.log(error.message)
);
