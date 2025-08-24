import "./App.css";

function App() {
  return <>Hello</>;
}

export default App;

// import { useEffect, useState, FormEvent } from "react";

// type Category = {
//   id: number;
//   name: string;
// };

// type Document = {
//   id: number;
//   title: string;
//   description: string;
//   category_id: number;
// };

// export default function App() {
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     category_id: "",
//   });

//   // завантаження даних
//   useEffect(() => {
//     fetch("http://localhost:5000/api/categories")
//       .then((res) => res.json())
//       .then((data: Category[]) => setCategories(data));

//     fetch("http://localhost:5000/api/documents")
//       .then((res) => res.json())
//       .then((data: Document[]) => setDocuments(data));
//   }, []);

//   // відправка документа
//   const addDocument = async (e: FormEvent) => {
//     e.preventDefault();
//     await fetch("http://localhost:5000/api/documents", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     setForm({ title: "", description: "", category_id: "" });

//     const updated: Document[] = await fetch(
//       "http://localhost:5000/api/documents"
//     ).then((res) => res.json());
//     setDocuments(updated);
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>CRM Документи</h1>

//       <form onSubmit={addDocument}>
//         <input
//           placeholder="Назва"
//           value={form.title}
//           onChange={(e) => setForm({ ...form, title: e.target.value })}
//         />
//         <input
//           placeholder="Опис"
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//         />
//         <select
//           value={form.category_id}
//           onChange={(e) => setForm({ ...form, category_id: e.target.value })}
//         >
//           <option value="">Оберіть категорію</option>
//           {categories.map((c) => (
//             <option key={c.id} value={c.id}>
//               {c.name}
//             </option>
//           ))}
//         </select>
//         <button type="submit">Додати документ</button>
//       </form>

//       <h2>Список документів</h2>
//       <ul>
//         {documents.map((doc) => (
//           <li key={doc.id}>
//             {doc.title} ({doc.description}) — {doc.category_id}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
