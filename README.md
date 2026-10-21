# MiniShop Dashboard

ใบงาน Basic Tailwind and React ทำด้วย Vite + Tailwind CSS + React

## หน้าที่มี
- Dashboard: การ์ดสรุป และตาราง Recent Orders
- Products: การ์ดสินค้า ค้นหาชื่อและกรองตามหมวดหมู่ได้ กด Add to Cart แล้วตัวเลขบนตะกร้าเพิ่ม
- Profile: ข้อมูลผู้ใช้และ Account Summary
- React Workshop: เลือกจำนวนสินค้าด้วยปุ่ม + / - แล้วเพิ่มลงตะกร้า (เข้าจากปุ่ม "React Workshop" ในหน้า Products)
- Responsive: ปรับจำนวนคอลัมน์ตามขนาดหน้าจอ

## วิธีรัน
```
npm install
npm run dev
```
แล้วเปิด http://localhost:5173/

## ประวัติ commit
- commit แรกเป็นเวอร์ชัน Vanilla JS + Tailwind
- commit ถัดมาปรับเป็น React (แยกเป็น component ใน src/components)

## Week 6-8: MiniShop React (useEffect + API)
เพิ่มจากเวอร์ชันก่อนหน้า:
- หน้า Products ดึงข้อมูลจริงจาก Fake Store API (https://fakestoreapi.com/products) ด้วย `useEffect` + `fetch`
- แยก Component ย่อย: `ProductCard`, `ProductList`, `ProductDetail`
- มี Loading / Error / Empty State ครบ
- Category Filter ใช้หมวดหมู่จริงจาก API
- Sort ราคา น้อย→มาก และ มาก→น้อย (Bonus Challenge 2)
- View Detail เปิด modal แสดงชื่อ ราคา รายละเอียด และ Rating (Bonus Challenge 3)
- Add to Cart อัปเดตตัวเลขบนไอคอนตะกร้าที่ Header (Bonus Challenge 4)
