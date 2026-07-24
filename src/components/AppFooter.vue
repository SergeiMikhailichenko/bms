<template>
    <!-- <footer class="flex w-full max-w-[1280px] justify-around items-center border-t border-gray/20 text-gray">
        <div class="h-[60px] content-center text-center">BMS</div>
        <a href="tel:+74950000000" class="h-[60px] content-center text-center">+7 (495) 000 00 00</a>
    </footer> -->



<footer class="border-t border-gray/10 bg-background">
  <div class="mx-auto flex max-w-[1280px] flex-col gap-10 px-4 py-12 md:flex-row md:justify-between md:px-8">

    <!-- Компания -->
    <div class="max-w-sm">
      <h3 class="text-2xl font-bold text-secondary">
        BMS
      </h3>

      <p class="mt-4 text-sm leading-7 text-gray">
        С помощью современных технологий и команды лидеров мы создаём высокий уровень комфорта и безопасности для самых бескомпромиссных людей</p>
    </div>

    <!-- Контакты -->
    <div>
      <h4 class="text-lg font-semibold text-secondary">
        Контакты
      </h4>

      <div class="mt-4 space-y-3 text-gray">
        <div class="flex gap-[12px]">
            <img src="@/assets/icons/phone.svg" alt="Телефон">
            <a
              href="tel:+74950000000"
              class="block transition hover:text-orange">
              +7 (495) 000 00 00
            </a>
        </div>
        <div class="flex gap-[12px]">
            <img src="@/assets/icons/mail.svg" alt="Почта">
            <a
              href="mailto:info@bms.com"
              class="block transition hover:text-orange">
              info@bms.com
            </a>
        </div>
        <div class="flex gap-[12px]">
            <img src="@/assets/icons/location.svg" alt="Адрес">
            <p>
                г. Москва, ул. Такаято 26
            </p>
        </div>
      </div>
    </div>

  </div>

  <!-- Нижняя строка -->
  <div class="border-t border-gray/10">
    <div class="mx-auto flex max-w-[1280px] items-center justify-center px-4 py-5 text-sm text-gray md:px-8">
      © 2026 BMS. All rights reserved.
    </div>
  </div>
</footer>


</template>
<script setup>
</script>