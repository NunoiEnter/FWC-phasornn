## English

**Normal JavaScript (Vanilla JavaScript)** is already built into the browser.  
**jQuery** is a JavaScript library that provides shorter commands, usually using `$`.

| Action | Normal JavaScript | jQuery |
|---|---|---|
| Select an element | `document.getElementById('balloon')` | `$('#balloon')` |
| Handle a click | `element.addEventListener('click', function)` | `element.on('click', function)` |
| Change CSS | `element.style.backgroundColor = 'red'` | `element.css('background-color', 'red')` |
| Read input | `input.value` | `$('#input').val()` |
| Remove an element | `element.remove()` | `$(element).remove()` |

**Easy presentation :**

> “The normal exercises use vanilla JavaScript, which is built into the browser. The bis exercises use jQuery, which is a JavaScript library. Both versions produce the same result, but jQuery gives us shorter commands for selecting elements, handling events, changing CSS, and modifying the DOM. jQuery must be loaded before we can use it.”

**Main difference:**

- Normal JavaScript needs no additional library.
- jQuery syntax is often shorter.
- jQuery uses `$()` to select elements.
- jQuery must be downloaded or loaded from a CDN.
- The visible behavior of the original and `bis` exercises should be the same.

## ภาษาไทย

**JavaScript ปกติ (Vanilla JavaScript)** มีอยู่ในเบราว์เซอร์อยู่แล้ว  
**jQuery** คือไลบรารีของ JavaScript ที่ช่วยให้เขียนคำสั่งสั้นลง โดยมักใช้ `$`

| การทำงาน | JavaScript ปกติ | jQuery |
|---|---|---|
| เลือก element | `document.getElementById('balloon')` | `$('#balloon')` |
| ตรวจจับการคลิก | `element.addEventListener('click', function)` | `element.on('click', function)` |
| เปลี่ยน CSS | `element.style.backgroundColor = 'red'` | `element.css('background-color', 'red')` |
| อ่านค่าจาก input | `input.value` | `$('#input').val()` |
| ลบ element | `element.remove()` | `$(element).remove()` |

**คำอธิบายง่าย ๆ:**

> “Exercise ปกติใช้ Vanilla JavaScript ซึ่งมีอยู่ในเบราว์เซอร์ ส่วน Exercise ที่มีคำว่า bis ใช้ jQuery ซึ่งเป็นไลบรารีของ JavaScript ทั้งสองแบบให้ผลลัพธ์เหมือนกัน แต่ jQuery ช่วยให้คำสั่งเลือก element จัดการ event เปลี่ยน CSS และแก้ไข DOM สั้นลง ก่อนใช้ jQuery ต้องโหลดไลบรารีก่อน”

**ความแตกต่างหลัก:**

- JavaScript ปกติไม่ต้องโหลดไลบรารีเพิ่ม
- jQuery มักเขียนสั้นกว่า
- jQuery ใช้ `$()` สำหรับเลือก element
- jQuery ต้องโหลดจากไฟล์หรือ CDN
- Exercise ปกติและ `bis` ต้องแสดงผลเหมือนกัน
