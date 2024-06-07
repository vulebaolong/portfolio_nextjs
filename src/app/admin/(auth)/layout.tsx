export default async function LayoutLogin({ children }: { children: React.ReactNode }) {
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
         <div
            style={{
               padding: `50px`,
               border: `1px solid var(--mui-palette-colors-5)`,
               borderRadius: `20px`,
            }}
         >
            {children}
         </div>
      </div>
   );
}
