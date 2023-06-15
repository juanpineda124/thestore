window.addEventListener('DOMContentLoaded', (event) => {
    const productForm = document.getElementById('productForm');

    productForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const nameInput = document.getElementById('name');
      const priceInput = document.getElementById('price');
      const inventoryInput = document.getElementById('inventory');

      const nameError = document.getElementById('nameError');
      const priceError = document.getElementById('priceError');
      const inventoryError = document.getElementById('inventoryError');

      nameError.classList.add('hide');
      priceError.classList.add('hide');
      inventoryError.classList.add('hide');

      let isValid = true;

      if (nameInput.value.trim() === '') {
        nameError.textContent = 'Este campo es requerido';
        nameError.classList.remove('hide');
        isValid = false;
      }

      if (priceInput.value.trim() === '') {
        priceError.textContent = 'Este campo es requerido';
        priceError.classList.remove('hide');
        isValid = false;
      }

      if (inventoryInput.value.trim() === '') {
        inventoryError.textContent = 'Este campo es requerido';
        inventoryError.classList.remove('hide');
        isValid = false;
      }

      if (isValid) {
        alert('El producto ha sido creado');
        document.getElementById("name").focus();
      }
    });
  });

