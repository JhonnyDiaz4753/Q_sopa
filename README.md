# 🍲 Q_sopa — Menú Digital para Restaurante

Aplicación web para que los clientes de un restaurante consulten el menú completo, los ingredientes de cada plato y los precios, desde cualquier dispositivo.

🔗 **Demo en vivo:** [qsopav01.vercel.app](https://qsopav01.vercel.app)  
🛠 **Panel de administración:** [Admin_Q_sopa](https://github.com/JhonnyDiaz4753/Admin_Q_sopa)

---

## ✨ Funcionalidades

- 📋 Visualización del menú completo del restaurante
- 🥗 Detalle de ingredientes por plato
- 💵 Precios actualizados en tiempo real desde la base de datos
- 📱 Diseño responsive — funciona en móvil y desktop
- ⚡ Carga rápida con Vite y arquitectura SPA

---

## 🖼 Capturas de pantalla

| Vista móvil | Vista desktop |
|---|---|
| ![mobile screenshot] | ![desktop screenshot] |
|---|---|
| <img width="412" height="821" alt="Captura de pantalla 2026-03-08 171904" src="https://github.com/user-attachments/assets/1beb1de1-4095-4d5c-bf30-8459cc67980a" /> | <img width="1896" height="952" alt="Captura de pantalla 2026-02-28 153634" src="https://github.com/user-attachments/assets/25e0668a-e01a-4456-98a3-8d0e56e1162a" />|
---

## 🛠 Stack tecnológico

| Capa | Tecnología |
|---|---|
| Frontend | React 18 + Vite |
| Estilos | CSS (diseño propio, sin frameworks) |
| Lenguaje | JavaScript (ES6+) |
| Despliegue | Vercel |
| Backend | Spring Boot + PostgreSQL + Supabase *(gestionado desde el panel admin)* |

---

## 🏗 Arquitectura del sistema

```
Q_sopa (este repo)          ←→     API REST (Spring Boot)    ←→    PostgreSQL (Supabase)
Panel Admin (Admin_Q_sopa)  ←→     API REST (Spring Boot)    ←→    PostgreSQL (Supabase)
```

El sistema completo está compuesto por tres capas independientes:
- **Q_sopa** — interfaz pública para clientes del restaurante
- **Admin_Q_sopa** — panel de gestión para administradores
- **API REST** — backend en Spring Boot con base de datos PostgreSQL en la nube via Supabase

---

## 🚀 Instalación local

```bash
# 1. Clonar el repositorio
git clone https://github.com/JhonnyDiaz4753/Q_sopa.git
cd Q_sopa

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Edita .env con la URL de tu API

# 4. Iniciar en desarrollo
npm run dev
```

---

## ⚙️ Variables de entorno

```env
VITE_API_URL=https://tu-api-backend.com
```

---

## 📁 Estructura del proyecto

```
src/
├── components/      # Componentes reutilizables
├── pages/           # Vistas principales
├── assets/          # Imágenes y recursos
└── App.jsx          # Componente raíz
```

---

## 👨‍💻 Autor

**Jhonny Díaz** — Ingeniero de Sistemas  
📍 Cali, Colombia  
🔗 [LinkedIn](https://www.linkedin.com/in/jhonny-diaz-centeno-567225378)  
🐙 [GitHub](https://github.com/JhonnyDiaz4753)
