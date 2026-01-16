"use client";

import { useState } from "react";

/* ================== DATA HÓA ================== */
type Lesson = { name: string };
type Chapter = { name: string; lessons: Lesson[] };

const chemistryData: Record<string, Chapter[]> = {
  /* ================== LỚP 10 ================== */
  "10": [
    {
      name: "Chương 1. Cấu tạo nguyên tử",
      lessons: [
        { name: "Bài 1. Thành phần của nguyên tử" },
        { name: "Bài 2. Nguyên tố hóa học" },
        { name: "Bài 3. Cấu trúc lớp vỏ electron nguyên tử" },
        { name: "Bài 4. Ôn tập Chương 1" }
      ]
    },
    {
      name: "Chương 2. Bảng tuần hoàn và định luật tuần hoàn",
      lessons: [
        { name: "Bài 5. Cấu tạo của bảng tuần hoàn" },
        { name: "Bài 6. Xu hướng biến đổi tính chất của nguyên tử" },
        { name: "Bài 7. Xu hướng biến đổi tính chất của hợp chất" },
        { name: "Bài 8. Định luật tuần hoàn – Ý nghĩa bảng tuần hoàn" },
        { name: "Bài 9. Ôn tập Chương 2" }
      ]
    },
    {
      name: "Chương 3. Liên kết hóa học",
      lessons: [
        { name: "Bài 10. Quy tắc octet" },
        { name: "Bài 11. Liên kết ion" },
        { name: "Bài 12. Liên kết cộng hóa trị" },
        { name: "Bài 13. Liên kết hydrogen và tương tác Van der Waals" },
        { name: "Bài 14. Ôn tập Chương 3" }
      ]
    },
    {
      name: "Chương 4. Phản ứng oxi hóa – khử",
      lessons: [
        { name: "Bài 15. Phản ứng oxi hóa – khử" },
        { name: "Bài 16. Ôn tập Chương 4" }
      ]
    },
    {
      name: "Chương 5. Năng lượng hóa học",
      lessons: [
        { name: "Bài 17. Biến thiên enthalpy" },
        { name: "Bài 18. Ôn tập Chương 5" }
      ]
    },
    {
      name: "Chương 6. Tốc độ phản ứng",
      lessons: [
        { name: "Bài 19. Tốc độ phản ứng" },
        { name: "Bài 20. Ôn tập Chương 6" }
      ]
    },
    {
      name: "Chương 7. Nhóm halogen",
      lessons: [
        { name: "Bài 21. Nhóm halogen" },
        { name: "Bài 22. Hydrogen halide – muối halide" },
        { name: "Bài 23. Ôn tập Chương 7" }
      ]
    }
  ],

  /* ================== LỚP 11 ================== */
  "11": [
    {
      name: "Chương 1. Cân bằng hóa học",
      lessons: [
        { name: "Bài 1. Khái niệm cân bằng hóa học" },
        { name: "Bài 2. Cân bằng trong dung dịch nước" },
        { name: "Bài 3. Ôn tập Chương 1" }
      ]
    },
    {
      name: "Chương 2. Nitrogen – Sulfur",
      lessons: [
        { name: "Bài 4. Nitrogen" },
        { name: "Bài 5. Ammonia và muối ammonium" },
        { name: "Bài 6. Hợp chất của nitrogen với oxygen" },
        { name: "Bài 7. Sulfur và sulfur dioxide" },
        { name: "Bài 8. Sulfuric acid và muối sulfate" },
        { name: "Bài 9. Ôn tập Chương 2" }
      ]
    },
    {
      name: "Chương 3. Đại cương hóa học hữu cơ",
      lessons: [
        { name: "Bài 10. Hợp chất hữu cơ và hóa học hữu cơ" },
        { name: "Bài 11. Phương pháp tách và tinh chế" },
        { name: "Bài 12. Công thức phân tử hợp chất hữu cơ" },
        { name: "Bài 13. Cấu tạo hóa học hợp chất hữu cơ" },
        { name: "Bài 14. Ôn tập Chương 3" }
      ]
    },
    {
      name: "Chương 4. Hydrocarbon",
      lessons: [
        { name: "Bài 15. Alkane" },
        { name: "Bài 16. Hydrocarbon không no" },
        { name: "Bài 17. Aren (hydrocarbon thơm)" },
        { name: "Bài 18. Ôn tập Chương 4" }
      ]
    },
    {
      name: "Chương 5. Dẫn xuất halogen – alcohol – phenol",
      lessons: [
        { name: "Bài 19. Dẫn xuất halogen" },
        { name: "Bài 20. Alcohol" },
        { name: "Bài 21. Phenol" },
        { name: "Bài 22. Ôn tập Chương 5" }
      ]
    },
    {
      name: "Chương 6. Hợp chất carbonyl – carboxylic acid",
      lessons: [
        { name: "Bài 23. Hợp chất carbonyl" },
        { name: "Bài 24. Carboxylic acid" },
        { name: "Bài 25. Ôn tập Chương 6" }
      ]
    }
  ],

  /* ================== LỚP 12 ================== */
  "12": [
    {
      name: "Chương 1. Ester – Lipid",
      lessons: [
        { name: "Bài 1. Ester – Lipid" },
        { name: "Bài 2. Xà phòng và chất giặt rửa" },
        { name: "Bài 3. Ôn tập Chương 1" }
      ]
    },
    {
      name: "Chương 2. Carbohydrate",
      lessons: [
        { name: "Bài 4. Glucose – Fructose" },
        { name: "Bài 5. Saccharose – Maltose" },
        { name: "Bài 6. Tinh bột – Cellulose" },
        { name: "Bài 7. Ôn tập Chương 2" }
      ]
    },
    {
      name: "Chương 3. Hợp chất chứa nitrogen",
      lessons: [
        { name: "Bài 8. Amine" },
        { name: "Bài 9. Amino acid và peptide" },
        { name: "Bài 10. Protein và enzyme" },
        { name: "Bài 11. Ôn tập Chương 3" }
      ]
    },
    {
      name: "Chương 4. Polymer",
      lessons: [
        { name: "Bài 12. Đại cương về polymer" },
        { name: "Bài 13. Vật liệu polymer" },
        { name: "Bài 14. Ôn tập Chương 4" }
      ]
    },
    {
      name: "Chương 5. Pin điện và điện phân",
      lessons: [
        { name: "Bài 15. Thế điện cực – nguồn điện hóa học" },
        { name: "Bài 16. Điện phân" },
        { name: "Bài 17. Ôn tập Chương 5" }
      ]
    },
    {
      name: "Chương 6. Đại cương về kim loại",
      lessons: [
        { name: "Bài 18. Cấu tạo tinh thể kim loại" },
        { name: "Bài 19. Tính chất kim loại" },
        { name: "Bài 20. Điều chế kim loại" },
        { name: "Bài 21. Hợp kim" },
        { name: "Bài 22. Ăn mòn kim loại" },
        { name: "Bài 23. Ôn tập Chương 6" }
      ]
    },
    {
      name: "Chương 7. Nhóm IA – IIA",
      lessons: [
        { name: "Bài 24. Nhóm IA" },
        { name: "Bài 25. Nhóm IIA" },
        { name: "Bài 26. Ôn tập Chương 7" }
      ]
    },
    {
      name: "Chương 8. Kim loại chuyển tiếp – Phức chất",
      lessons: [
        { name: "Bài 27. Kim loại chuyển tiếp" },
        { name: "Bài 28. Đại cương về phức chất" },
        { name: "Bài 29. Tính chất và ứng dụng phức chất" },
        { name: "Bài 30. Ôn tập Chương 8" }
      ]
    }
  ]
};

/* ================== UI COMPONENT ================== */
function Card({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginBottom: 24,
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,255,255,0.08)"
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#80d8ff" }}>
        {title}
      </h2>
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
}

/* ================== PAGE ================== */
export default function Page() {
  const [grade, setGrade] = useState<number | null>(null);
  const [chapterIndex, setChapterIndex] = useState<number | null>(null);
  const [lessonIndex, setLessonIndex] = useState<number | null>(null);
  const [includeExam, setIncludeExam] = useState(true);
  const examYears = 4;

  const chapters = grade ? chemistryData[String(grade)] : [];
  const lessons =
    grade !== null && chapterIndex !== null
      ? chapters[chapterIndex]?.lessons ?? []
      : [];

  const handleGenerate = async () => {
    if (grade === null || chapterIndex === null || lessonIndex === null) return;

    const examBlock = includeExam
      ? `
 CÂU HỎI ĐÃ RA TRONG ĐỀ THI TN THPT (${examYears} NĂM GẦN ĐÂY)
- Easy – Medium – Hard
`
      : "";

    const prompt = `
Bạn là giáo viên Hóa học THPT, chuyên luyện thi Tốt nghiệp THPT và Đại học.
BÀI HỌC:
- Lớp ${grade}
- ${chapters[chapterIndex].name}
- ${lessons[lessonIndex].name}
GIÁO VIÊN: ĐỖ TẤN CẢNH-0988809539
YÊU CẦU:
Thiết kế bộ slide/infographic học tập môn Hóa học bám sát trọng tâm kiến thức của bài, mang tính hệ thống, trực quan, và thực chiến khi thi TN THPT và Đại học.

NỘI DUNG CẦN CÓ (trình bày theo dạng slide/infographic rõ ràng, dễ học, dễ nhớ):

1) BẢN ĐỒ LIÊN KẾT KIẾN THỨC (CONCEPT MAP)
   - Thể hiện mối liên hệ giữa các khái niệm chính của bài.
   - Làm nổi bật các “nút” kiến thức trọng tâm.

2) TÓM TẮT LÝ THUYẾT TRỌNG TÂM
   - Chắt lọc nội dung cốt lõi, tránh lan man.
   - Trình bày dạng bullet point, sơ đồ hoặc bảng tổng hợp.

3) CÔNG THỨC & PHẢN ỨNG QUAN TRỌNG
   - Liệt kê đầy đủ các công thức cần nhớ.
   - Ghi rõ điều kiện phản ứng (nếu có).

4) DẠNG BÀI & PHƯƠNG PHÁP GIẢI
   - Phân loại các dạng bài thường gặp trong đề thi.
   - Nêu chiến lược giải nhanh, mẹo làm bài và bẫy thường gặp.

5) 12 BÀI TẬP LUYỆN THI 2026 (phân tầng ★ → ★★★★)
   - 4 câu mức ★ (Easy)
   - 5 câu mức ★★–★★★ (Medium)
   - 3câu mức ★★★★ (Hard)
   - Mỗi câu đều có đáp án cuối.
   - Kèm hướng dẫn giải chi tiết.
   - Trình bày rõ ràng, dễ nhìn.

6) 8 CÂU HỎI TRẮC NGHIỆM TN THPT 4 NĂM GẦN NHẤT
   - Chọn lọc các câu tiêu biểu liên quan trực tiếp đến bài học.
   - ẨN lời giải chi tiết trong phần HINTS.
   - Kèm hướng dẫn giải chi tiết sau khi mở HINTS.
   - Đánh dấu độ khó từng câu (Easy – Medium – Hard).
   - Trình bày rõ ràng, dễ nhìn.
   - Phù hợp format đề thi TN THPT.
   -Có nút refresh để đổi câu hỏi khác.
   - Có nút redo để làm lại câu hỏi.

7) GHI NHỚ TRONG 60 GIÂY(Mẹo nhớ nhanh)
   - Tóm tắt ngắn gọn nhất những điều “phải nhớ” để làm bài thi.
   - Trình bày dạng checklist hoặc sơ đồ cực ngắn.
   GIAO DIỆN & HIỆU ỨNG MONG MUỐN:
🌊 Nền gradient động - Hiệu ứng chuyển động mượt mà
💎 Thẻ glass morphism - Độ mờ và bóng đổ đẹp hơn
✨ Neon glow mạnh mẽ - Ánh sáng neon rực rỡ hơn
🎨 Bóng đổ đa lớp - Tạo chiều sâu 3D cho các thành phần
⭐ Text shadow cho stars - Ngôi sao phát sáng
🔘 Nút bấm responsive - Hiệu ứng nhấn thật với active state
📋 Scrollbar đẹp mắt - Thanh cuộn gradient với hover
🎭 Animation fadeIn - Chuyển section mượt mà
💫 Pulse animation nâng cao - Hiệu ứng nhấp nháy phức tạp hơn
✅ Correct answers → GREEN background with encouraging messages:

"Well done! 🎉"
"Great job! ⭐"
"Excellent! 🌟"
"Perfect! 💯"
"Amazing! 🎊"
"Outstanding! 🏆"
❌ Incorrect answers → ORANGE/RED background with motivational messages:

"Almost there! 💪"
"Try again! 🔄"
"Keep going! 🚀"
"Don't give up! 💫"
Progress percentage showing how much you've completed the worksheet.

Tạo slide/infographic với bố cục rõ ràng, màu sắc hài hòa, hình ảnh minh họa sinh động, dễ hiểu, và thu hút học sinh.
"${examBlock}
`;

    await navigator.clipboard.writeText(prompt);
    window.open("https://www.canva.com/ai/code", "_blank");
  };

  const selectStyle: React.CSSProperties = {
    width: "100%",
    padding: 12,
    fontSize: 16,
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.4)",
    background: "#e3f2fd",
    color: "#0b0f2a",
    cursor: "pointer",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background:
          "radial-gradient(circle at top,#1a237e 0%,#0b0f2a 50%,#050816 100%)",
        fontFamily: "system-ui",
        color: "#e3f2fd",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 42 }}>⚛ Chemistry AI Assistant</h1>
        <p style={{ fontSize: 20, color: "#ffd54f" }}>
          Công cụ tạo worksheet ôn thi TN THPT – Môn Hóa
        </p>
      </header>

      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <Card title="Chọn lớp">
          <select
            size={3}
            style={selectStyle}
            value={grade ?? ""}
            onChange={(e) => {
              setGrade(Number(e.target.value));
              setChapterIndex(null);
              setLessonIndex(null);
            }}
          >
            <option value="" disabled>
              -- Chọn lớp --
            </option>
            <option value={10}>Lớp 10</option>
            <option value={11}>Lớp 11</option>
            <option value={12}>Lớp 12</option>
          </select>
        </Card>

        {grade !== null && (
          <Card title="Chọn chương">
            <select
              size={6}
              style={selectStyle}
              value={chapterIndex ?? ""}
              onChange={(e) => {
                setChapterIndex(Number(e.target.value));
                setLessonIndex(null);
              }}
            >
              <option value="" disabled>
                -- Chọn chương --
              </option>
              {chapters.map((c, i) => (
                <option key={i} value={i}>
                  {c.name}
                </option>
              ))}
            </select>
          </Card>
        )}

        {chapterIndex !== null && (
          <Card title="Chọn bài">
            <select
              size={8}
              style={selectStyle}
              value={lessonIndex ?? ""}
              onChange={(e) => setLessonIndex(Number(e.target.value))}
            >
              <option value="" disabled>
                -- Chọn bài --
              </option>
              {lessons.map((l, i) => (
                <option key={i} value={i}>
                  {l.name}
                </option>
              ))}
            </select>
          </Card>
        )}

        {lessonIndex !== null && (
          <Card title="Cấu hình đề">
            <label style={{ display: "flex", gap: 12 }}>
              <input
                type="checkbox"
                checked={includeExam}
                onChange={(e) => setIncludeExam(e.target.checked)}
              />
              Bao gồm câu hỏi TN THPT
            </label>

            <button
              onClick={handleGenerate}
              style={{
                marginTop: 24,
                width: "100%",
                padding: 18,
                fontSize: 22,
                fontWeight: 800,
                borderRadius: 16,
                border: "none",
                background: "linear-gradient(90deg,#00e5ff,#00c853)",
              }}
            >
              🚀 Generate Worksheet
            </button>
          </Card>
        )}
      </div>

      <style jsx global>{`
        select option {
          background: #1a237e;
          color: #ff1744;
        }
        select option:hover {
          background: #283593;
        }
      `}</style>
    </main>
  );
}
