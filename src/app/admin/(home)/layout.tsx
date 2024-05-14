export default async function LayoutHome({ children }: { children: React.ReactNode }) {
   return (
      <div
         style={{
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            width: `100vw`,
            height: `100vh`,
         }}
      >
         {children}
      </div>
   );
}
