
<script setup>
 const data = [
 {
                      "Item":"Iphone 13",
                      "ShippingDate": "7 November 2024",
                      "Price": "RM 3999",
                      "status":"Waiting for Courier"
                   },
                   {
                    "Item":"Foldable Study Table",
                      "ShippingDate": "7 January 2025",
                      "Price": "RM 45.25",
                      "status":"Shipped"
                   },
                   {
                    "Item":"Asus ROG ZePhyrus G14 ",
                      "ShippingDate": "7 November 2024",
                      "Price": "RM 5299",
                      "status":"Waiting for Payment"
                   }
                  ]

                  const showModal = ref(false);
                  const showModalHideOverlay = ref(false); 
                  import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

const modules = [Navigation, Pagination, Scrollbar, A11y];

const images = [
'https://assets.bharian.com.my/images/articles/%5BBM%5D%20Have%20fun%20on%20Shopee%20this%2011.11%20Big%20Sale%20with%20Dolla.jpeg',
'https://ecentral.my/wp-content/uploads/2025/01/shopee-voucher-1.jpg',
'https://assets.bharian.com.my/images/articles/%5BBM%5D%20Win%20up%20to%20RM1%20Million%20with%20Shopee%20Live.JPG'
];
</script>


<template>

  <h1 class="text-5xl font-bold">Shopee Lite <Icon class="text-warning" name="fluent-emoji-high-contrast:basket"></Icon></h1>   
  
  <rs-alert variant="warning">STACK MORE VOUCHERS, PAY LESS FOR YOUR ORDERS !</rs-alert>

<div class="p-4">
    <LayoutsBreadcrumb />
    <!-- First Row -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
      <!-- Summary Card #1 -->
      <rs-card>
        <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-warning/20 rounded-2xl"
          >
            <Icon class="text-primary" name="ic:outline-attach-money"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              RM0.63</span
            >
            <span class="text-base font-semibold text-gray-400"
              >Shoppepay</span

            
            >   
            <rs-button variant="warning" @click="showModal = true">Check Balance</rs-button>
                      <rs-modal title="Shoppepay Wallet"  v-model="showModal">
                        <p> Your current balance is RM0.63</p>
                      </rs-modal>       
            
          </div>
        </div>
       
      </rs-card>
      <!-- Summary Card #2 -->
      <rs-card>
        <div class="summary-2 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-yellow-100 rounded-2xl"
          >
            <Icon
              class="text-yellow-500"
              name="ic:outline-account-circle"
            ></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight"> Check-In</span>
            <span class="text-base font-semibold text-gray-500"
              >Daily for free coins!</span
            >
           

            <rs-button  @click="showModalHideOverlay = true"> Check-In </rs-button>
                      <rs-modal title="Check In"  v-model="showModalHideOverlay" hide-overlay>
                       you have earn 1 coin for today !
                      </rs-modal>
                     
          </div>
        </div>
       
      </rs-card>
      <!-- Summary Card #3 -->
 
        
     
      <!-- Summary Card #4 -->
      <rs-card>
        <div class="summary-4 pt-5 pb-3 px-5 flex items-center gap-4">
          <div
            class="p-5 flex justify-center items-center bg-blue-100 rounded-2xl"
          >
            <Icon class="text-blue-500" name="svg-spinners:blocks-scale"></Icon>
          </div>
          <div class="flex-1 truncate">
            <span class="block font-semibold text-xl leading-tight">
              Vouchers</span
            >
            <span class="text-base font-semibold text-gray-500"
              >Vouchers & <p> Discounts</p></span
            >
          </div>
        </div>
       
      </rs-card>
    </div>
  </div>

  <swiper
                        :modules="modules"
                        :slides-per-view="1"
                        :centeredSlides="true"
                        :pagination="{ clickable: true }"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        navigation
                      >
                        <swiper-slide v-for="(image, index) in images" :key="index">
                          <div class="w-full flex justify-center items-center">
                            <img
                              :src="image"
                              class="object-contain w-full md:w-1/2"
                            />
                          </div>
                        </swiper-slide>
                      </swiper>


<h1> Recent Item</h1> 
                <rs-table
                
                  :data="data"
                  :options="{
                    variant: 'default',
                    striped: true,
                    borderless: true,
                  }"
                  :options-advanced="{
                    sortable: true,
                    responsive: true,
                    filterable: false,
                  }"
                  advanced
                >
                <template v-slot:status="data">
  <div>
    <rs-badge v-if="data.text === 'Shipped'" variant="success">
      {{ data.text }}
    </rs-badge>
    <rs-badge v-else-if="data.text === 'Waiting for Courier'" variant="warning">
      {{ data.text }}
    </rs-badge>
    <rs-badge v-else variant="danger">
      {{ data.text }}
    </rs-badge>
  </div>
</template>
                </rs-table>
</template>