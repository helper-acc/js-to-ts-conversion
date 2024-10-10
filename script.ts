// Визначення днів тижня, часових слотів та типів занять за допомогою типів alias та union.
// Це дозволяє обмежити можливі значення цих типів для кращої перевірки типів під час розробки.
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type TimeSlot = "8:30-10:00" | "10:15-11:45" | "12:15-13:45" | "14:00-15:30" | "15:45-17:15";
type CourseType = "Lecture" | "Seminar" | "Lab" | "Practice";

// Створення структур для професора, аудиторії, курсу та заняття.
// Ці типи використовуються для зберігання та обробки даних про розклад.
type Professor = { id: number; name: string; department: string; };
type Classroom = { number: string; capacity: number; hasProjector: boolean; };
type Course = { id: number; name: string; type: CourseType; };
type Lesson = { courseId: number; professorId: number; classroomNumber: string; dayOfWeek: DayOfWeek; timeSlot: TimeSlot; };

// Масиви даних, які зберігають інформацію про професорів, аудиторії, курси та розклад занять.
// Це основні дані, з якими працює система.
const professors: Professor[] = [];
const classrooms: Classroom[] = [];
const courses: Course[] = [];
const schedule: Lesson[] = [];

// Функція для додавання нового професора до списку.
// Після додавання новий професор доступний для призначення на заняття.
function addProfessor(professor: Professor): void {
  professors.push(professor);
}

// Функція для додавання заняття до розкладу, якщо немає конфліктів.
// Використовує validateLesson для перевірки конфліктів, перш ніж додати заняття.
function addLesson(lesson: Lesson): boolean {
  if (validateLesson(lesson) === null) {
    schedule.push(lesson);
    return true; // Повертає true, якщо заняття успішно додано
  }
  return false; // Повертає false, якщо є конфлікт
}

// Функція, яка повертає список вільних аудиторій у вказаний час і день.
// Перевіряє, чи є аудиторія вільною, використовуючи розклад поточних занять.
function findAvailableClassrooms(timeSlot: TimeSlot, dayOfWeek: DayOfWeek): string[] {
  const occupiedClassrooms = schedule
    .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
    .map(lesson => lesson.classroomNumber);
  
  return classrooms
    .filter(classroom => !occupiedClassrooms.includes(classroom.number))
    .map(classroom => classroom.number);
}

// Функція для отримання розкладу заняття конкретного професора за ідентифікатором.
// Використовується для швидкого доступу до занять, на яких викладає професор.
function getProfessorSchedule(professorId: number): Lesson[] {
  return schedule.filter(lesson => lesson.professorId === professorId);
}

// Тип для конфлікту розкладу, що містить тип конфлікту та деталі заняття, що спричинило конфлікт.
// Допомагає виявляти конфлікти професора та аудиторії.
type ScheduleConflict = {
  type: "ProfessorConflict" | "ClassroomConflict";
  lessonDetails: Lesson;
};

// Функція для перевірки конфлікту під час додавання заняття.
// Повертає об'єкт конфлікту, якщо є конфлікт у розкладі, або null, якщо конфліктів немає.
function validateLesson(lesson: Lesson): ScheduleConflict | null {
  const conflict = schedule.find(existingLesson => 
    existingLesson.dayOfWeek === lesson.dayOfWeek && existingLesson.timeSlot === lesson.timeSlot && 
    (existingLesson.professorId === lesson.professorId || existingLesson.classroomNumber === lesson.classroomNumber)
  );

  if (!conflict) return null;

  if (conflict.professorId === lesson.professorId) {
    return { type: "ProfessorConflict", lessonDetails: conflict };
  } else if (conflict.classroomNumber === lesson.classroomNumber) {
    return { type: "ClassroomConflict", lessonDetails: conflict };
  }
  return null;
}

// Функція для обчислення відсотка використання аудиторії на основі кількості зайнятих слотів.
// Використовується для оцінки рівня використання кожної аудиторії.
function getClassroomUtilization(classroomNumber: string): number {
  const totalSlots = 5 * 5; // 5 днів по 5 слотів на день
  const usedSlots = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
  return (usedSlots / totalSlots) * 100;
}

// Функція, яка повертає найпопулярніший тип занять на основі кількості курсів кожного типу.
// Використовує об’єкт для підрахунку кількості курсів кожного типу.
function getMostPopularCourseType(): CourseType {
  const typeCounts = courses.reduce((acc, course) => {
    acc[course.type] = (acc[course.type] || 0) + 1;
    return acc;
  }, {} as Record<CourseType, number>);

  return Object.keys(typeCounts).reduce((a, b) => typeCounts[a as CourseType] > typeCounts[b as CourseType] ? a : b) as CourseType;
}

// Функція для зміни аудиторії заняття, якщо нова аудиторія вільна.
// Перевіряє, чи є конфлікти перед оновленням аудиторії для заняття.
function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
  const lesson = schedule.find(lesson => lesson.courseId === lessonId);
  if (lesson && validateLesson({ ...lesson, classroomNumber: newClassroomNumber }) === null) {
    lesson.classroomNumber = newClassroomNumber;
    return true; // Повертає true, якщо аудиторія успішно змінена
  }
  return false; // Повертає false, якщо зміна неможлива через конфлікт
}

// Функція для видалення заняття з розкладу за ідентифікатором.
// Видаляє заняття із масиву розкладу, якщо його знайдено.
function cancelLesson(lessonId: number): void {
  const lessonIndex = schedule.findIndex(lesson => lesson.courseId === lessonId);
  if (lessonIndex !== -1) {
    schedule.splice(lessonIndex, 1); // Видаляє заняття з розкладу
  }
}

//========================Тестування функцій===================================================
// Створення тестових даних для професорів, аудиторій, курсів та розкладу
const professor1: Professor = { id: 1, name: "Dr. Maxim Glavchev", department: "Mathematics" };
const professor2: Professor = { id: 2, name: "Dr. Ivan Mezrlyak", department: "Physics" };

const classroom1: Classroom = { number: "A101", capacity: 30, hasProjector: true };
const classroom2: Classroom = { number: "B202", capacity: 25, hasProjector: false };

const course1: Course = { id: 1, name: "Calculus", type: "Lecture" };
const course2: Course = { id: 2, name: "Quantum Mechanics", type: "Lab" };

const lesson1: Lesson = { courseId: 1, professorId: 1, classroomNumber: "A101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
const lesson2: Lesson = { courseId: 2, professorId: 2, classroomNumber: "A101", dayOfWeek: "Monday", timeSlot: "10:15-11:45" };

// Додавання даних
addProfessor(professor1);
addProfessor(professor2);

classrooms.push(classroom1, classroom2);
courses.push(course1, course2);

console.log("=== Додавання занять ===");
console.log(addLesson(lesson1)); // Очікується: true, заняття має бути додане
console.log(addLesson(lesson2)); // Очікується: true, заняття має бути додане

console.log("\n=== Пошук вільних аудиторій ===");
console.log(findAvailableClassrooms("8:30-10:00", "Monday")); // Очікується: ["B202"]
console.log(findAvailableClassrooms("10:15-11:45", "Monday")); // Очікується: ["B202"]

console.log("\n=== Розклад професора ===");
console.log(getProfessorSchedule(1)); // Очікується: [{ ...lesson1 }]
console.log(getProfessorSchedule(2)); // Очікується: [{ ...lesson2 }]

console.log("\n=== Перевірка конфліктів ===");
const conflictLesson: Lesson = { courseId: 3, professorId: 1, classroomNumber: "A101", dayOfWeek: "Monday", timeSlot: "8:30-10:00" };
console.log(validateLesson(conflictLesson)); // Очікується: { type: "ProfessorConflict", ...}

console.log("\n=== Використання аудиторії ===");
console.log(getClassroomUtilization("A101")); // Очікується: 8%, оскільки використовується в одному слоті з 25

console.log("\n=== Найпопулярніший тип занять ===");
console.log(getMostPopularCourseType()); // Очікується: "Lecture", якщо кількість однакова, повернеться перший за алфавітом

console.log("\n=== Перепризначення аудиторії ===");
console.log(reassignClassroom(1, "B202")); // Очікується: true, оскільки немає конфлікту
console.log(schedule); // lesson1 має бути оновлений з новою аудиторією

console.log("\n=== Скасування заняття ===");
cancelLesson(1); // Видалить lesson1 з розкладу
console.log(schedule); // schedule більше не містить lesson1
