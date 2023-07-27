document.addEventListener('DOMContentLoaded', () => {
 let count = 0;
 const countDisplay = document.getElementById('count');
 const increaseBtn = document.getElementById('increaseBtn');
 const saveBtn = document.getElementById('saveBtn');
 const resetBtn = document.getElementById('resetBtn');
 const savedCountsList = document.getElementById('savedCountsList');

 increaseBtn.addEventListener('click', () => {
   count++;
   countDisplay.textContent = count;
 });

 saveBtn.addEventListener('click', () => {
   const savedCount = document.createElement('li');
   savedCount.textContent = count;
   savedCountsList.appendChild(savedCount);
 });

 resetBtn.addEventListener('click', () => {
   count = 0;
   countDisplay.textContent = count;
   savedCountsList.innerHTML = '';
 });
});
