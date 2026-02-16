# 🚀 Redux Darslari

Redux kutubxonasini o'rganish uchun amaliy darslar to'plami. Bu repositoriyada Redux bilan ishlashning asosiy tushunchalari va ilg'or xususiyatlari amaliy misollar orqali tushuntirilgan.

![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📚 Darslar Ro'yxati

### 1️⃣ Redux Asoslari
- **Redux nima va nima uchun kerak?**
  - State management muammolari
  - Redux arxitekturasi
  - Asosiy tushunchalar: Store, Action, Reducer

### 2️⃣ Redux Store Yaratish
- Store konfiguratsiyasi
- createStore() funksiyasi
- Initial state o'rnatish

### 3️⃣ Actions va Action Creators
- Action obyektlari tuzilishi
- Action types yaratish
- Action creators yozish
- Best practices

### 4️⃣ Reducers
- Reducer funksiyalari
- State immutability
- Switch-case yoki object mapping
- Reducer composition

### 5️⃣ React bilan Integratsiya
- `react-redux` kutubxonasi
- Provider component
- useSelector hook
- useDispatch hook

### 6️⃣ Redux Middleware
- Middleware konsepsiyasi
- Redux Thunk
- Asinxron actionlar
- API bilan ishlash

### 7️⃣ Redux Toolkit (RTK)
- Redux Toolkit nima?
- configureStore()
- createSlice()
- createAsyncThunk()
- RTK Query basics

### 8️⃣ Advanced Patterns
- Normalizatsiya
- Selector patterns
- Reselect kutubxonasi
- Performance optimizatsiyasi

### 9️⃣ Debugging va DevTools
- Redux DevTools Extension
- Time-travel debugging
- State snapshot
- Action logging

### 🔟 Real-world Project
- To'liq CRUD amaliyoti
- Authentication flow
- Error handling
- Loading states

## 🛠️ O'rnatish

```bash
# Repository ni klonlash
git clone https://github.com/Asilbek2706/Redux-lessons.git

# Papkaga o'tish
cd Redux-lessons

# Dependencies o'rnatish
npm install

# Loyihani ishga tushirish
npm start
```

## 📖 Foydalanish

Har bir dars alohida branch yoki commit shaklida tashkil etilgan. Darslarni ketma-ketlikda o'rganish tavsiya etiladi:

```bash
# Muayyan darsga o'tish uchun commit hash-dan foydalaning
git checkout <commit-hash>
```

## 🎯 O'rganish Yo'li

1. **Boshlovchilar uchun**: 1-5 darslar
2. **O'rta daraja**: 6-7 darslar
3. **Ilg'or daraja**: 8-10 darslar

## 💡 Asosiy Konseptlar

### Redux ning uchta asosiy printsipi:

1. **Single source of truth** - Butun dastur state'i bitta store'da saqlanadi
2. **State is read-only** - State'ni o'zgartirish uchun faqat action dispatch qilish kerak
3. **Changes are made with pure functions** - Reducer'lar sof funksiyalar bo'lishi kerak

### Redux Data Flow:

```
┌─────────────┐
│   Action    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│  Reducer    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│    Store    │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│     UI      │
└─────────────┘
```

## 🔧 Texnologiyalar

- **React** - UI library
- **Redux** - State management
- **Redux Toolkit** - Official Redux toolset
- **React-Redux** - React bindings
- **Redux DevTools** - Debugging tool

## 📝 Misollar

Har bir darsda amaliy misollar mavjud:

- Todo List - Redux asoslari
- Counter App - Actions va Reducers
- User Management - Async operations
- Shopping Cart - Complex state
- Authentication - Real-world scenario

## 🤝 Hissa Qo'shish

Agar siz ham bu darslarga o'z hissangizni qo'shmoqchi bo'lsangiz:

1. Repository ni fork qiling
2. Yangi branch yarating (`git checkout -b feature/yangi-dars`)
3. O'zgarishlarni commit qiling (`git commit -m 'Yangi dars qo'shildi'`)
4. Branch ni push qiling (`git push origin feature/yangi-dars`)
5. Pull Request oching

## 📚 Qo'shimcha Manbalar

- [Redux Rasmiy Hujjatlari](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React-Redux](https://react-redux.js.org/)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)

## 👨‍💻 Muallif

**Asilbek**
- GitHub: [@Asilbek2706](https://github.com/Asilbek2706)

## 📄 Litsenziya

Bu loyiha shaxsiy o'quv maqsadlari uchun yaratilgan.

## ⭐ Qo'llab-quvvatlash

Agar bu darslar sizga foydali bo'lsa, repositoriyaga yulduzcha (⭐) qo'yishingizni unutmang!

---

**Happy Learning! 🎉**

_Bu repositoriya Redux ni chuqur o'rganish uchun yaratilgan. Savollaringiz bo'lsa, Issues bo'limida yozing!_
