const LEVELS = [
    // EASY
    { group: "Easy", target: 24, numbers: [6, 6, 6, 6], hint: "Thử cộng cả 4 số." },
    { group: "Easy", target: 20, numbers: [10, 5, 3, 2], hint: "Thử cộng cả 4 số." },
    { group: "Easy", target: 18, numbers: [9, 3, 3, 3], hint: "Thử cộng cả 4 số." },
    { group: "Easy", target: 16, numbers: [8, 4, 2, 2], hint: "thử cộng cả 4 số." },
    { group: "Easy", target: 12, numbers: [3, 3, 3, 3], hint: "Thử cộng cả 4 số." },

    // MEDIUM
    { group: "Medium", target: 20, numbers: [2, 2, 5, 5], hint: "phép nhân cơ bản" },
    { group: "Medium", target: 30, numbers: [5, 5, 5, 5], hint: "Có thể ghép 2 số lại rồi cộng." },
    { group: "Medium", target: 36, numbers: [6, 6, 6, 6], hint: "Thử nhân hai số trước." },
    { group: "Medium", target: 15, numbers: [7, 2, 3, 1], hint: "tạo ra số 5 trước có thể hữu ích." },
    { group: "Medium", target: 40, numbers: [5, 5, 5, 10], hint: "thử tạo ra 50 trước" },

    // HARD
    { group: "Hard", target: 24, numbers: [10, 10, 4, 4], hint: "tạo ra số lớn trước rồi trừ đi" },
    { group: "Hard", target: 2, numbers: [4, 5, 6, 3], hint: "suy nghĩ 1 cách đơn giản về phép tính cộng trừ" },
    { group: "Hard", target: 9, numbers: [9, 2, 6, 3], hint: "chỉ là phép tính đơn giản giữa nhân và chia" },
    { group: "Hard", target: 5, numbers: [6, 4, 3, 3], hint: "tạo ra số 2 trước có thể hữu ích" },
    { group: "Hard", target: 6, numbers: [3, 6, 2, 2], hint: "tạo ra số 4 trước có thể hữu ích" },

    // SUPER HARD
    { group: "Super Hard", target: 9, numbers: [4, 3, 3, 4], hint: "hãy tạo ra 1 phân số với 3 và 4" },
    { group: "Super Hard", target: 36, numbers: [3, 8, 4, 3], hint: "phép cộng hoặc trừ có thể kết hợp để tạo ra 1 số hữu ích" },
    { group: "Super Hard", target: 33, numbers: [3, 6, 6, 6], hint: "hãy thử tạo ra 1 phân số có thể triệt tiêu 6" },
    { group: "Super Hard", target: 36, numbers: [3, 6, 3, 6], hint: "hãy thử tạo ra 1 số khác bằng phép chia" },
    { group: "Super Hard", target: 3636, numbers: [3, 10, 6, 1], hint: "thử ghép 4 số thành 2 số khác nhau rồi nhân với nhau" }
];
