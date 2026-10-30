/* ── Tab chọn distro ── */
const commands = {
  ubuntu: {
    label: 'Ubuntu / Debian',
    time: '~ 3 phút',
    method: 'Option 1 · Installer script',
    tip: 'Chạy xong, mở fcitx5-configtool và thêm SKey vào nhóm bộ gõ. Cài thêm frontend GTK hoặc Qt phù hợp với ứng dụng. Linux Mint và Pop!_OS (họ Debian) dùng chung script này.',
    extra: '<strong>Option 2 · PPA Ubuntu 24.04 / 26.04:</strong><div class="install-extra-code"><pre>sudo add-apt-repository ppa:collyn094/fcitx5-skey\nsudo apt update\nsudo apt install fcitx5-skey\nskey-setup</pre><button type="button" class="extra-copy" data-extra-copy="sudo add-apt-repository ppa:collyn094/fcitx5-skey\nsudo apt update\nsudo apt install fcitx5-skey\nskey-setup" data-extra-copy-label="Sao chép PPA"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép PPA</button></div><span class="install-extra-note">Đây là lựa chọn riêng cho Ubuntu. Debian hoặc Ubuntu khác phiên bản dùng Option 1.</span>',
    copy: 'curl -fsSL https://collyn.github.io/skey/install.sh | sudo bash\nsudo apt install fcitx5-skey\nskey-setup',
    html: '<span class="install-comment"># Repository chính thức</span>\ncurl -fsSL https://collyn.github.io/skey/install.sh | sudo bash\nsudo apt install fcitx5-skey\nskey-setup'
  },
  fedora: {
    label: 'Fedora',
    time: '~ 3 phút',
    method: 'Option 1 · Repository script',
    tip: 'Script đã thêm repository. Sau khi chạy skey-setup, mở fcitx5-configtool và thêm SKey vào nhóm bộ gõ. RHEL, Rocky và AlmaLinux (họ Fedora) dùng chung script này.',
    extra: '<strong>Frontend:</strong> nếu ứng dụng GTK/Qt chưa nhận phím, cài thêm frontend Fcitx5 tương ứng rồi đăng nhập lại session.',
    copy: 'curl -fsSL https://collyn.github.io/skey/install-fedora.sh | sudo bash\nsudo dnf install fcitx5-skey\nskey-setup',
    html: '<span class="install-comment"># Thêm repository và cài gói</span>\ncurl -fsSL https://collyn.github.io/skey/install-fedora.sh | sudo bash\nsudo dnf install fcitx5-skey\nskey-setup'
  },
  opensuse: {
    label: 'openSUSE',
    time: '~ 3 phút',
    method: 'Option 1 · Repository script',
    tip: 'Script đã thêm repository. Sau khi chạy skey-setup, mở fcitx5-configtool và thêm SKey vào nhóm bộ gõ.',
    extra: '<strong>Frontend:</strong> cài frontend GTK/Qt phù hợp với app bạn dùng; script repository không thay đổi cấu hình ứng dụng.',
    copy: 'curl -fsSL https://collyn.github.io/skey/install-opensuse.sh | sudo bash\nsudo zypper install fcitx5-skey\nskey-setup',
    html: '<span class="install-comment"># Thêm repository và cài gói</span>\ncurl -fsSL https://collyn.github.io/skey/install-opensuse.sh | sudo bash\nsudo zypper install fcitx5-skey\nskey-setup'
  },
  arch: {
    label: 'Arch Linux',
    time: '~ 3 phút',
    method: 'Option 1 · Repository script',
    tip: 'Script đã thêm repository. Sau khi chạy skey-setup, mở fcitx5-configtool và thêm SKey vào nhóm bộ gõ. Manjaro, EndeavourOS, Artix và CachyOS (họ Arch) dùng chung script này.',
    extra: '<strong>Sau khi cài:</strong> kiểm tra addon trong <code>fcitx5-configtool</code>; nếu dùng Plasma Wayland, chọn Fcitx 5 trong Virtual Keyboard.',
    copy: 'curl -fsSL https://collyn.github.io/skey/install-arch.sh | sudo bash\nsudo pacman -S fcitx5-skey\nskey-setup',
    html: '<span class="install-comment"># Thêm repository và cài gói</span>\ncurl -fsSL https://collyn.github.io/skey/install-arch.sh | sudo bash\nsudo pacman -S fcitx5-skey\nskey-setup'
  },
  nixos: {
    label: 'NixOS',
    time: '~ 5 phút',
    method: 'Option 1 · configuration.nix',
    tip: 'Rebuild xong, mở fcitx5-configtool và thêm SKey vào nhóm bộ gõ. Đăng xuất rồi đăng nhập lại sau lần cài đầu để GNOME nạp AppIndicator.',
    extra: '<strong>Áp dụng:</strong><div class="install-extra-code"><pre>sudo nixos-rebuild switch --no-flake\nfcitx5 -r -d</pre><button type="button" class="extra-copy" data-extra-copy="sudo nixos-rebuild switch --no-flake\nfcitx5 -r -d" data-extra-copy-label="Sao chép lệnh"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép lệnh</button></div><span class="install-extra-note">Nếu <code>/etc/nixos</code> không có <code>flake.nix</code>, bỏ <code>--no-flake</code>. Cập nhật bản mới và kênh Dev: <a href="https://github.com/collyn/skey/blob/main/packaging/nixos/README.md" target="_blank" rel="noreferrer">README NixOS</a>.</span>',
    copy: '{ config, pkgs, ... }:\nlet\n  skey = pkgs.callPackage (builtins.fetchTarball\n    "https://github.com/collyn/skey/archive/refs/heads/main.tar.gz"\n    + "/packaging/nixos/default.nix") {};\nin {\n  hardware.uinput.enable = true;\n  services.udev.packages = [ skey ];\n  i18n.inputMethod = {\n    enable = true;\n    type = "fcitx5";\n    fcitx5.addons = [ skey ];\n  };\n  # Hiện biểu tượng Fcitx5/SKey trên top panel GNOME.\n  services.desktopManager.gnome.sessionPath = [ pkgs.gnomeExtensions.appindicator ];\n}',
    html: '<span class="install-comment"># /etc/nixos/configuration.nix — thêm SKey (không cần flake)</span>\n{ config, pkgs, ... }:\nlet\n  skey = pkgs.callPackage (builtins.fetchTarball\n    "https://github.com/collyn/skey/archive/refs/heads/main.tar.gz"\n    + "/packaging/nixos/default.nix") {};\nin {\n  hardware.uinput.enable = true;\n  services.udev.packages = [ skey ];\n  i18n.inputMethod = {\n    enable = true;\n    type = "fcitx5";\n    fcitx5.addons = [ skey ];\n  };\n  # Hiện biểu tượng Fcitx5/SKey trên top panel GNOME.\n  services.desktopManager.gnome.sessionPath = [ pkgs.gnomeExtensions.appindicator ];\n}'
  },
  void: {
    label: 'Void Linux',
    time: '~ 15 phút',
    method: 'Option 1 · Build từ source',
    tip: 'Bước build cần mạng (CMake tự tải skey-engine đã ghim trong dự án). Sau khi cài, chạy skey-setup rồi thêm SKey vào Fcitx5.',
    extra: '<strong>1 · Gói build (chưa có gói chính thức):</strong><div class="install-extra-code"><pre>sudo xbps-install -S base-devel git cmake extra-cmake-modules pkg-config fcitx5 fcitx5-devel \\\n  gettext dbus-devel libxcb-devel libX11-devel libXtst-devel librsvg-devel \\\n  qt6-base-devel qt6-svg-devel libei-devel libportal-devel</pre><button type="button" class="extra-copy" data-extra-copy="sudo xbps-install -S base-devel git cmake extra-cmake-modules pkg-config fcitx5 fcitx5-devel \\\n  gettext dbus-devel libxcb-devel libX11-devel libXtst-devel librsvg-devel \\\n  qt6-base-devel qt6-svg-devel libei-devel libportal-devel" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><strong>2 · Rust + Cargo (nếu máy chưa có):</strong><div class="install-extra-code"><pre>curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre><button type="button" class="extra-copy" data-extra-copy="curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><span class="install-extra-note">Void chưa có gói fcitx5-skey trong repo — cài bằng cách build từ mã nguồn.</span>',
    copy: 'git clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup',
    html: '<span class="install-comment"># 3 · Clone, build và cài đặt</span>\ngit clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup'
  },
  gentoo: {
    label: 'Gentoo',
    time: '~ 20 phút',
    method: 'Option 1 · Build từ source',
    tip: 'Bước build cần mạng (CMake tự tải skey-engine đã ghim trong dự án). Sau khi cài, chạy skey-setup rồi thêm SKey vào Fcitx5.',
    extra: '<strong>1 · Gói build (chưa có overlay chính thức):</strong><div class="install-extra-code"><pre>sudo emerge --ask app-i18n/fcitx5 kde-frameworks/extra-cmake-modules dev-build/cmake \\\n  dev-build/pkgconf dev-vcs/git sys-devel/gettext dev-libs/dbus x11-libs/libxcb \\\n  x11-libs/libX11 x11-libs/libXtst gnome-base/librsvg dev-qt/qtbase dev-qt/qtsvg \\\n  dev-libs/libei dev-libs/libportal dev-lang/rust</pre><button type="button" class="extra-copy" data-extra-copy="sudo emerge --ask app-i18n/fcitx5 kde-frameworks/extra-cmake-modules dev-build/cmake \\\n  dev-build/pkgconf dev-vcs/git sys-devel/gettext dev-libs/dbus x11-libs/libxcb \\\n  x11-libs/libX11 x11-libs/libXtst gnome-base/librsvg dev-qt/qtbase dev-qt/qtsvg \\\n  dev-libs/libei dev-libs/libportal dev-lang/rust" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><span class="install-extra-note">emerge đã cài sẵn Rust + Cargo — bỏ qua bước 2. Gentoo chưa có overlay cho fcitx5-skey.</span>',
    copy: 'git clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup',
    html: '<span class="install-comment"># 2 · Clone, build và cài đặt</span>\ngit clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup'
  },
  source: {
    label: 'Từ mã nguồn',
    time: '~ 15 phút',
    method: 'Option 1 · Build từ source',
    tip: 'Bước build cần mạng (CMake tự tải skey-engine đã ghim trong dự án). Sau khi cài, chạy skey-setup rồi thêm SKey vào Fcitx5.',
    extra: '<strong>1 · Gói build — Ubuntu / Debian:</strong><div class="install-extra-code"><pre>sudo apt update\nsudo apt install build-essential git cmake extra-cmake-modules pkg-config fcitx5 \\\n  libfcitx5core-dev libfcitx5utils-dev libdbus-1-dev libxcb1-dev \\\n  libx11-dev libxtst-dev libgl1-mesa-dev libxkbcommon-dev libfontconfig1-dev \\\n  qt6-base-dev libqt6svg6 gettext librsvg2-bin</pre><button type="button" class="extra-copy" data-extra-copy="sudo apt update\nsudo apt install build-essential git cmake extra-cmake-modules pkg-config fcitx5 \\\n  libfcitx5core-dev libfcitx5utils-dev libdbus-1-dev libxcb1-dev \\\n  libx11-dev libxtst-dev libgl1-mesa-dev libxkbcommon-dev libfontconfig1-dev \\\n  qt6-base-dev libqt6svg6 gettext librsvg2-bin" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><span class="install-extra-note">Bật Native trên Wayland: cài thêm <code>libei-dev libportal-dev</code> (Ubuntu 24.04+ / Debian 13+).</span><strong>Fedora:</strong><div class="install-extra-code"><pre>sudo dnf install git cmake extra-cmake-modules fcitx5 fcitx5-devel gettext gcc-c++ make \\\n  pkgconf-pkg-config dbus-devel libxcb-devel libX11-devel libXtst-devel \\\n  mesa-libGL-devel libxkbcommon-devel fontconfig-devel qt6-qtbase-devel \\\n  librsvg2-tools libei-devel libportal-devel</pre><button type="button" class="extra-copy" data-extra-copy="sudo dnf install git cmake extra-cmake-modules fcitx5 fcitx5-devel gettext gcc-c++ make \\\n  pkgconf-pkg-config dbus-devel libxcb-devel libX11-devel libXtst-devel \\\n  mesa-libGL-devel libxkbcommon-devel fontconfig-devel qt6-qtbase-devel \\\n  librsvg2-tools libei-devel libportal-devel" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><strong>Arch Linux:</strong><div class="install-extra-code"><pre>sudo pacman -S --needed git base-devel cmake extra-cmake-modules fcitx5 \\\n  gettext dbus libxcb libx11 libxtst librsvg qt6-base qt6-svg \\\n  libei libportal hicolor-icon-theme</pre><button type="button" class="extra-copy" data-extra-copy="sudo pacman -S --needed git base-devel cmake extra-cmake-modules fcitx5 \\\n  gettext dbus libxcb libx11 libxtst librsvg qt6-base qt6-svg \\\n  libei libportal hicolor-icon-theme" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><strong>2 · Rust + Cargo (nếu máy chưa có):</strong><div class="install-extra-code"><pre>curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh</pre><button type="button" class="extra-copy" data-extra-copy="curl --proto \'=https\' --tlsv1.2 -sSf https://sh.rustup.rs | sh" data-extra-copy-label="Sao chép"><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg> Sao chép</button></div><span class="install-extra-note">Fedora/Arch có thể dùng gói distro thay rustup: <code>sudo dnf install rust cargo</code> · <code>sudo pacman -S rust</code>.</span>',
    copy: 'git clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup',
    html: '<span class="install-comment"># 3 · Clone, build và cài đặt</span>\ngit clone --depth=1 --single-branch https://github.com/collyn/skey.git\ncd skey\ncmake -S . -B build -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release \\\n  -DBUILD_TESTING=OFF\ncmake --build build -j"$(nproc)"\nsudo cmake --install build\nskey-setup'
  }
};

const tabButtons = document.querySelectorAll('.distro-tab');
const installPanel = document.querySelector('#install-panel');
const installLabel = document.querySelector('#install-label');
const installTime = document.querySelector('#install-time');
const installMethod = document.querySelector('#install-method-label');
const installTip = document.querySelector('#install-tip');
const installExtra = document.querySelector('#install-extra');
const commandCode = document.querySelector('#install-command');
const copyButton = document.querySelector('.copy-button');
copyButton.dataset.copy = commands.ubuntu.copy;
installExtra.innerHTML = commands.ubuntu.extra;
installTime.textContent = commands.ubuntu.time;
installMethod.textContent = commands.ubuntu.method;
installExtra.querySelectorAll('.extra-copy').forEach((button) => button.setAttribute('aria-live', 'polite'));
const copyIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>';
const copiedIcon = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>';

document.addEventListener('click', async (event) => {
  const button = event.target.closest('[data-extra-copy]');
  if (!button) return;
  const label = button.dataset.extraCopyLabel || 'Sao chép PPA';
  try {
    await navigator.clipboard.writeText(button.dataset.extraCopy);
    button.innerHTML = `${copiedIcon} Đã sao chép`;
    setTimeout(() => { button.innerHTML = `${copyIcon} ${label}`; }, 1800);
  } catch (error) {
    button.innerHTML = `${copiedIcon} Hãy bôi đen lệnh`;
  }
});

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((tab) => { tab.classList.remove('active'); tab.setAttribute('aria-selected', 'false'); });
    button.classList.add('active');
    button.setAttribute('aria-selected', 'true');
    const item = commands[button.dataset.distro];
    installPanel.classList.toggle('reordered', ['source', 'void', 'gentoo'].includes(button.dataset.distro));
    installLabel.textContent = item.label;
    installTime.textContent = item.time;
    installMethod.textContent = item.method;
    installTip.querySelector('span:last-child').textContent = item.tip;
    installExtra.innerHTML = item.extra;
    installExtra.querySelectorAll('.extra-copy').forEach((b) => b.setAttribute('aria-live', 'polite'));
    commandCode.innerHTML = item.html;
    copyButton.dataset.copy = item.copy;
    copyButton.innerHTML = `${copyIcon} Sao chép`;
  });
  // Điều hướng tab bằng phím mũi tên (mẫu WAI-ARIA tabs)
  button.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const count = tabButtons.length;
    let next;
    if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = count - 1;
    else next = (index + (['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1) + count) % count;
    tabButtons[next].focus();
    tabButtons[next].click();
  });
});

copyButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(copyButton.dataset.copy);
    copyButton.innerHTML = `${copiedIcon} Đã sao chép`;
    setTimeout(() => { copyButton.innerHTML = `${copyIcon} Sao chép`; }, 1800);
  } catch (error) {
    copyButton.innerHTML = `${copiedIcon} Hãy bôi đen lệnh`;
  }
});

/* ── Header đổi nền khi cuộn ── */
const siteHeader = document.querySelector('#site-header');
const onScroll = () => siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

/* ── Menu điều hướng mobile ── */
const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('#site-nav');
const closeNav = () => { siteNav.classList.remove('open'); navToggle.setAttribute('aria-expanded', 'false'); };
navToggle.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(open));
});
siteNav.addEventListener('click', (event) => { if (event.target.closest('a')) closeNav(); });
document.addEventListener('click', (event) => {
  if (!siteNav.contains(event.target) && event.target !== navToggle) closeNav();
});
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeNav(); });

/* ── Hiện dần khi cuộn ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
