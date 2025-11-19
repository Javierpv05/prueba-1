import imagenlocal from "../assets/react.svg";
import { BtnVolver } from "../components/ui/buttons/BtnVolver";
export const AImagenesPage = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10  ">
      <BtnVolver />
      <h1 className="text-3xl font-bold text-center">Imagenes con react</h1>
      <span>AImagenesPage</span>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">imagenes lovales impotadas</h2>
        <img src={imagenlocal} alt="avatarlocal previo" />
      </section>

      <section>
        <img
          src="https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
          alt="imagen de alternativa "
        />
        <div
          className=" flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=')",
          }}
        >
          <span className="bg-black/60 px-4 py-2 rounded-2xl text-black">
            fondo con esto encima{" "}
          </span>
        </div>
      </section>

      <section>
        <div
          className=" flex h-64 bg-cover bg-center rounded-2xl items-center justify-center"
          style={{
            backgroundImage:
              "url('https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=')",
          }}
        ></div>
      </section>
    </main>
  );
};
