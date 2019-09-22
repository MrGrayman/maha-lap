class MahaLap {
    static tamnaiWithDay(day) {
        switch (day) {
            case "อาทิตย์":
                return 1;
            case "จันทร์":
                return 2;
            case "อังคาร":
                return 3;
            case "พุธ":
                return 4;
            case "พฤหัสบดี":
                return 5;
            case "ศุกร์":
                return 6;
            case "เสาร์":
                return 7;
            case "สงกรานต์":
                return 13;
            case "ฮาโลวีน":
                return 31;
            case "คริสมาสต์":
                return 25;
            default:
                return "Not Match";
        }

    }
}

module.exports = MahaLap;