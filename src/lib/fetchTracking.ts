export const fetchStudentGTM = async (studentId: string) => {
  try {
    const res = await fetch(
      `${import.meta.env.VITE_REACT_APP_ROOT}/tracking`
    );

    
    const result = await res.json();

    const student = result.data.find(
      (item: any) => item.studentId === studentId
    );

    return student?.tracking?.gtmId || null;
  } catch (error) {
    console.error("Tracking error:", error);
    return null;
  }
};