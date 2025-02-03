import './styles/main.scss';

// Função para abrir modais de produtos
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(`modal-backdrop-${modalId.split('-')[1]}`);

  if (modal) {
    modal.classList.add('open');
    backdrop.style.display = 'block';

    const closeButtons = modal.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
      button.addEventListener('click', () => closeModal(modalId));
    });
  }
}

// Função para fechar modais de produtos
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const backdrop = document.getElementById(`modal-backdrop-${modalId.split('-')[1]}`);

  if (modal) {
    modal.classList.remove('open');
    backdrop.style.display = 'none';
  }
}

// Ativa modais quando clicar nos produtos
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('click', function() {
    const modalId = this.getAttribute('data-modal');
    openModal(modalId);
  });
});

// Ativa modo noturno pela navbar
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
  });
}

// Ativa modo noturno pela sidebar
const darkModeToggleSidebar = document.getElementById('darkModeToggleSidebar');
if (darkModeToggleSidebar) {
  darkModeToggleSidebar.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('dark-mode', this.checked);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');  // Botão do menu hamburguer
  const sidebar = document.querySelector('.sidebar');         // Sidebar (menu lateral)
  const closeSidebarButton = document.querySelector('.sidebar-close');  // Botão de fechar (X)

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function(event) {
      event.stopPropagation();  // Evita conflitos de clique
      sidebar.classList.toggle('open');  // Adiciona ou remove a classe 'open' na sidebar
    });
  }

  if (closeSidebarButton) {
    closeSidebarButton.addEventListener('click', function() {
      sidebar.classList.remove('open');  // Fecha a sidebar
    });
  }

  // Fecha a sidebar ao clicar fora dela
  document.addEventListener('click', function(event) {
    if (sidebar.classList.contains('open') && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
      sidebar.classList.remove('open');  // Fecha a sidebar se clicar fora
    }
  });
});

