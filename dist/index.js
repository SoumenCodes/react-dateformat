"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = formatDate;
function formatDate(date, format) {
    const map = {
        YYYY: date.getFullYear().toString(),
        MM: (date.getMonth() + 1).toString().padStart(2, "0"),
        DD: date.getDate().toString().padStart(2, "0"),
        HH: date.getHours().toString().padStart(2, "0"),
        mm: date.getMinutes().toString().padStart(2, "0"),
        ss: date.getSeconds().toString().padStart(2, "0"),
    };
    return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (matched) => map[matched]);
}
