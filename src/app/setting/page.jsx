import React from "react";
import Image from "next/image";
import "./setting.css";
import srcImage from "../../../public/globe.svg";
import Link from "next/link";

export default function Setting() {
  return (
    <div>
      {/* <!-- Container utama --> */}
      <div className="container">
        {/* <!-- Sidebar --> */}
        <aside className="sidebar">
          <div className="logo-circle">E</div>
          <nav className="sidebar-nav">
            <Link href="/login" className="icon-link-circle">
              <i className="fas fa-arrow-right text-lg">Login</i>
            </Link>
            <Link href="#" className="icon-link">
              <i className="fas fa-grip-horizontal text-lg"></i>
            </Link>
            <a href="#" className="icon-link">
              <i className="fas fa-folder text-lg"></i>
            </a>
            <a href="#" className="icon-link active">
              <i className="fas fa-cog text-lg"></i>
            </a>
          </nav>
        </aside>

        {/* <!-- Konten utama --> */}
        <main className="main-content">
          <header className="header">
            <h1>Pengaturan</h1>
            <div className="user-profile">
              <div className="user-info">
                <span>John Doe</span>
                <span>User</span>
              </div>
              {/* <!-- Gambar profil pengguna (di header) --> */}
              <Image
                width={"100px"}
                height={"100px"}
                className="user-avatar"
                src={srcImage}
                alt="User Profile"
              />
            </div>
          </header>

          {/* <!-- Bagian "Akun Saya" --> */}
          <section className="section">
            <h2 className="section-header">Akun Saya</h2>
            <div className="profile-picture">
              {/* <!-- Foto profil besar --> */}
              {/* <Image fill src={srcImage} alt="Profile Picture" /> */}
            </div>
            {/* <!-- Formulir rincian akun --> */}
            <div className="form-grid">
              {/* <!-- Grup input Email --> */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  defaultValue="johndoe@gmail.com"
                  //   readonly
                  className="form-input"
                />
              </div>
              {/* <!-- Grup input Nama Pengguna --> */}
              <div className="form-group">
                <label htmlFor="username">Nama Pengguna</label>
                <input
                  type="text"
                  id="username"
                  defaultValue="John Doe"
                  //   readonly
                  className="form-input"
                />
              </div>
              {/* <!-- Grup input Peran --> */}
              <div className="form-group">
                <label htmlFor="role">Peran</label>
                <input
                  type="text"
                  id="role"
                  defaultValue="Admin"
                  //   readonly
                  className="form-input"
                />
              </div>
              {/* <!-- Grup input Status --> */}
              <div className="form-group">
                <label htmlFor="status">Status</label>
                <input
                  type="text"
                  id="status"
                  defaultValue="Aktif"
                  //   readonly
                  className="form-input"
                />
              </div>
              {/* <!-- Grup input Bahasa --> */}
              <div className="form-group">
                <label htmlFor="language">Bahasa</label>
                <div className="relative">
                  <select id="language" className="form-select">
                    <option>English</option>
                    <option>Indonesia</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Bagian "Kata Sandi" --> */}
          <section className="section">
            <h2 className="section-header">Kata Sandi</h2>
            <div className="password-section">
              {/* <!-- Grup input Kata Sandi --> */}
              <div className="password-input-group">
                <label htmlFor="password">Kata Sandi</label>
                <input
                  type="password"
                  id="password"
                  defaultValue="********"
                  //   readonly
                  className="form-input"
                />
              </div>
              {/* <!-- Tombol Edit --> */}
              <button className="edit-button">Edit</button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
