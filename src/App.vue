<template>
	<v-app id="app">
		<v-container class="mt-10P text-center">
			<div class="main row container">
				<div class="card-right col-xl-2 col-lg-3 col-12 col-sm-6 col-md-5">
					<img class="avatar" src="https://hmachinery.ir/media/1_q2EM9J33m0IHqisZWXiWtQ.jpg">
					<p class="title-name">
						احسان نوروزی
					</p>
					<div class="skill-box mt-5">
						<font class="skill-text">Programmer</font>
					</div>

					<div class="pt-5">
						<a target="_blank" class="pa-3 social-account" href="https://www.linkedin.com/in/ehsan-norouzi-/">
							<v-icon large>
								mdi-linkedin
							</v-icon>
						</a>
						<a target="_blank" class="pa-3 social-account" href="https://github.com/Ehsann1/">
							<v-icon large>
								mdi-github
							</v-icon>
						</a>
					</div>

					<div class="sidebar-box pa-5">
						<div class="py-2">
							<v-icon color="blue">
								mdi-calendar-text
							</v-icon>
							2 تیر 1382
						</div>
						<div class="py-2">
							<v-icon color="blue">
								mdi-map-marker-radius
							</v-icon>
							ایران ، همدان
						</div>
						<div class="py-2">
							<v-icon color="blue">
								mdi-email
							</v-icon>
							Norouzi8446@gmail.com
						</div>
						<div class="py-2">
							<v-icon color="blue">
								mdi-cellphone-dock
							</v-icon>
							09109558446
						</div>
					</div>

					<div class="pa-5">
						<v-btn rounded large download href="./Resume-Ehsan-Norouzi.pdf" outlined color="#4da6ff">دانلود رزومه من</v-btn>
					</div>
				</div>
				<div class="card-main col-xl-7 col-lg-8 col-12">
					<div class="menu-div">
						<div class="menu" style="z-index:10;">
							<div class="menu-icon" @click="menuActive()">
								<div class="bar1"></div>
								<div class="bar2"></div>
								<div class="bar3"></div>
							</div>
							<div class="menu-items d-none">
								<router-link :to="{ name : 'About'}"
									:class="$route.name=='About'?'menu-item-active ':'menu-item'">
									درباره من</router-link>
								<router-link :to="{ name : 'Resume'}"
									:class="$route.name=='Resume'?'menu-item-active ':'menu-item'">
									رزومه</router-link>
								<router-link :to="{ name : 'Contact'}"
									:class="$route.name=='Contact'?'menu-item-active ':'menu-item'">
									ارتباط با من</router-link>
								<router-link :to="{ name : 'Portfolio'}"
									:class="$route.name=='Portfolio'?'menu-item-active ':'menu-item'">
									نمونه کار ها</router-link>
							</div>
						</div>
					</div>
					<v-container>
						<h1 class="main-title" v-if="$route.name == 'About'">درباره من</h1>
						<h1 class="main-title" v-else-if="$route.name == 'Resume'">رزومه</h1>
						<h1 class="main-title" v-else-if="$route.name == 'Contact'">ارتباط با من</h1>
						<h1 class="main-title" v-else>نمونه کار ها</h1>
						<div class="main-text pt-5">
							<router-view />
						</div>
					</v-container>
				</div>
			</div>

		</v-container>
	</v-app>
</template>

<style>
	@import './assets/css/style.css';
</style>

<script>
	export default {

		name: 'App',

		data: () => ({}),
		created() {
			window.addEventListener("resize", this.resizeScreen);
			window.addEventListener("scroll", this.scrollScreen);
		},
		destroyed() {
			window.removeEventListener("resize", this.resizeScreen);
			window.removeEventListener("scroll", this.scrollScreen);
		},
		methods: {

			//Scroll handler:
			scrollScreen: function () {
				if (screen.width > 1263) {
					let card_right = document.getElementsByClassName('card-right')[0];
					let avatar = document.getElementsByClassName('avatar')[0];
					if (120 < window.scrollY && window.scrollY < document.body.scrollHeight - 400) {
						avatar.style.marginTop = '1rem';
						card_right.style.top = `${window.scrollY-150}px`;
					}
					if (window.scrollY < 120) {
						avatar.style.marginTop = '-8rem';
						card_right.style.top = '0px';
					}
					if (window.scrollY >= document.body.scrollHeight - 700) {
						card_right.style.position = "sticky";
					} else {
						card_right.style.position = "relative";
					}
				}

			},
			// menue Click manager:
			menuActive: function () {
				document.getElementsByClassName('menu-icon')[0].classList.toggle('change');
				document.getElementsByClassName('menu')[0].classList.toggle('menu-active');
				document.getElementsByClassName('menu-items')[0].classList.toggle('d-none');
			}
			//Methods her
		},

	};
</script>