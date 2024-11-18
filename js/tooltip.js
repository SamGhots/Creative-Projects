  /* เป็นส่วนเเสดง ชื่อภาพเมื่อเมาร์ไปชี้ที่ภาพ */
  document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.getElementById('tooltip');   // รับค่า id จาก tooltip
    const images = document.querySelectorAll('.item img'); //  รับค่า  จาก item img

    images.forEach(image => {
      image.addEventListener('mouseenter', function() {
        tooltip.textContent = this.title; // กำหนดข้อความ tooltip จาก title attribute ของภาพ
        tooltip.style.opacity = 1;
      });

      image.addEventListener('mousemove', function(event) {
        tooltip.style.left = event.pageX + 15 + 'px'; // ตำแหน่ง tooltip ข้างเคอร์เซอร์
        tooltip.style.top = event.pageY + 15 + 'px';
      });

      image.addEventListener('mouseleave', function() {
        tooltip.style.opacity = 0;
      });
    });
  });