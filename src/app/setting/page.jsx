import React from "react";
import Image from "next/image";

export default function Setting() {
  return (
    <div>
      {/* <!-- Container utama --> */}
      <div class="container">
        {/* <!-- Sidebar --> */}
        <aside class="sidebar">
          <div class="logo-circle">E</div>
          <nav class="sidebar-nav">
            <a href="#" class="icon-link-circle">
              <i class="fas fa-arrow-right text-lg"></i>
            </a>
            <a href="#" class="icon-link">
              <i class="fas fa-grip-horizontal text-lg"></i>
            </a>
            <a href="#" class="icon-link">
              <i class="fas fa-folder text-lg"></i>
            </a>
            <a href="#" class="icon-link active">
              <i class="fas fa-cog text-lg"></i>
            </a>
          </nav>
        </aside>

        {/* <!-- Konten utama --> */}
        <main class="main-content">
          <header class="header">
            <h1>Pengaturan</h1>
            <div class="user-profile">
              <div class="user-info">
                <span>John Doe</span>
                <span>User</span>
              </div>
              {/* <!-- Gambar profil pengguna (di header) --> */}
              <Image
                class="user-avatar"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="User Profile"
              />
            </div>
          </header>

          {/* <!-- Bagian "Akun Saya" --> */}
          <section class="section">
            <h2 class="section-header">Akun Saya</h2>
            <div class="profile-picture">
              {/* <!-- Foto profil besar --> */}
              <Image
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile Picture"
              />
            </div>
            {/* <!-- Formulir rincian akun --> */}
            <div class="form-grid">
              {/* <!-- Grup input Email --> */}
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value="johndoe@gmail.com"
                  readonly
                  class="form-input"
                />
              </div>
              {/* <!-- Grup input Nama Pengguna --> */}
              <div class="form-group">
                <label for="username">Nama Pengguna</label>
                <input
                  type="text"
                  id="username"
                  value="John Doe"
                  readonly
                  class="form-input"
                />
              </div>
              {/* <!-- Grup input Peran --> */}
              <div class="form-group">
                <label for="role">Peran</label>
                <input
                  type="text"
                  id="role"
                  value="Admin"
                  readonly
                  class="form-input"
                />
              </div>
              {/* <!-- Grup input Status --> */}
              <div class="form-group">
                <label for="status">Status</label>
                <input
                  type="text"
                  id="status"
                  value="Aktif"
                  readonly
                  class="form-input"
                />
              </div>
              {/* <!-- Grup input Bahasa --> */}
              <div class="form-group">
                <label for="language">Bahasa</label>
                <div class="relative">
                  <select id="language" disabled class="form-select">
                    <option>English</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Bagian "Kata Sandi" --> */}
          <section class="section">
            <h2 class="section-header">Kata Sandi</h2>
            <div class="password-section">
              {/* <!-- Grup input Kata Sandi --> */}
              <div class="password-input-group">
                <label for="password">Kata Sandi</label>
                <input
                  type="password"
                  id="password"
                  value="********"
                  readonly
                  class="form-input"
                />
              </div>
              {/* <!-- Tombol Edit --> */}
              <button class="edit-button">Edit</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
