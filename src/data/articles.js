import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "22 August 2023",
		title: "Struggle Implementasi Dynamic Feature dengan Compose Navigation",
		description:
			"Cloud computing offers a range of benefits, including cost savings and increased flexibility. Find out why more businesses are turning to the cloud.",
		keywords: [
			"Jetpack Compose",
			"Irfanrev",
			"Irfan Maulana",
			"Compose Navigation",
			"Dynamic Feature",
			"Android",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img
						src="https://developer.android.com/images/jetpack/compose/compose-roadmap.svg"
						alt="random"
						className="randImage"
					/>
					<h1>
						Struggle dalam Implementasi Dynamic Feature di Jetpack
						Compose Navigation
					</h1>
					<p>
						Penerapan dynamic feature dalam pengembangan aplikasi
						Android telah memberikan fleksibilitas yang luar biasa
						kepada para developer. Namun, seperti halnya teknologi
						baru lainnya, perjalanan mengintegrasikan dynamic
						feature ke dalam Jetpack Compose Navigation juga bisa
						memiliki tantangan tersendiri. Dalam artikel ini, kami
						akan membahas beberapa tantangan umum yang mungkin Anda
						temui dan bagaimana mengatasinya.
					</p>
					<h2>1. Mengatur Navigasi Antar Dynamic Feature Module</h2>
					<p>
						Salah satu tantangan utama dalam penerapan dynamic
						feature adalah mengatur navigasi antar dynamic feature
						module. Saat menggunakan Jetpack Compose Navigation,
						mengarahkan pengguna dari satu dynamic feature ke
						dynamic feature lainnya dapat menjadi rumit. Anda perlu
						memastikan bahwa modul yang satu memiliki informasi
						tentang modul yang lain.
					</p>
					<p>
						<strong>Solusi:</strong> Gunakan komunikasi antar modul
						dengan berbagi ViewModel atau menggunakan event bus
						seperti EventBus. Ini memungkinkan modul untuk
						berkomunikasi tanpa harus terikat langsung pada
						navigasi.
					</p>
					<h2>2. Memisahkan UI dan Logika Bisnis</h2>
					<p>
						Saat menggunakan Jetpack Compose, tujuan utama adalah
						memisahkan tampilan (UI) dari logika bisnis. Namun, saat
						mengimplementasikan dynamic feature, Anda mungkin
						menemukan tumpang tindih antara UI dan logika bisnis,
						terutama jika Anda ingin membuat UI modular di setiap
						dynamic feature.
					</p>
					<p>
						<strong>Solusi:</strong> Pertimbangkan untuk memisahkan
						antara "UI-Only" Composables yang hanya menangani
						tampilan dan "ViewModels" yang mengatur logika bisnis.
						Hal ini akan membantu Anda menjaga kode lebih
						terorganisir dan mudah di-maintain.
					</p>
					<h2>3. Penanganan Dependency</h2>
					<p>
						Setiap dynamic feature bisa saja memiliki dependency
						yang berbeda. Masalah timbul saat Anda harus mengatur
						dependensi yang berbeda-beda untuk setiap modul dan
						memastikan bahwa semuanya berjalan dengan baik.
					</p>
					<p>
						<strong>Solusi:</strong> Pertimbangkan untuk menggunakan
						Dependency Injection (DI) framework seperti Dagger atau
						Hilt. Dengan DI, Anda dapat mengelola dependensi dengan
						lebih terstruktur dan menghindari konflik yang tidak
						diinginkan.
					</p>
					<h2>4. Pengujian Antar Modul</h2>
					<p>
						Pengujian juga bisa menjadi tantangan ketika Anda
						memiliki banyak dynamic feature module. Pengujian unit
						di satu modul mungkin tidak memerlukan dependensi dari
						modul lain, tetapi bagaimana dengan pengujian integrasi
						antar modul?
					</p>
					<p>
						<strong>Solusi:</strong> Gunakan pendekatan pengujian
						modular, di mana setiap modul diuji secara independen
						terlebih dahulu. Kemudian, Anda dapat melakukan
						pengujian integrasi di tingkat aplikasi untuk memastikan
						semua dynamic feature berfungsi harmonis.
					</p>
					<h2>Kesimpulan</h2>
					<p>
						Implementasi dynamic feature di Jetpack Compose
						Navigation adalah langkah maju dalam pengembangan
						aplikasi Android. Meskipun memiliki tantangan
						tersendiri, dengan pemahaman yang baik tentang bagaimana
						mengatasi kendala-kendala tersebut, Anda dapat
						mengintegrasikan dynamic feature dengan lancar dan
						memberikan pengalaman yang lebih baik bagi pengguna
						Anda.
					</p>
					<h3>Referensi:</h3>
					<ol>
						<li>
							<a
								href="https://developer.android.com/guide/playcore/dynamic-delivery"
								target="_blank"
							>
								Android Developers. (2023). "Dynamic Delivery."
							</a>
						</li>
						<li>
							<a
								href="https://developer.android.com/guide/navigation/navigation-compose"
								target="_blank"
							>
								Android Developers. (2023). "Jetpack Compose
								Navigation."
							</a>
						</li>
					</ol>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
