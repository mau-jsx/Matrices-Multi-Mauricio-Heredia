def mostrar_menu():
    print("-- Bienvenido al Menu----")
    print("1. Ingresar nueva persona")
    print("2. Mostrar todos los datos")
    print("3. Filtrar por DNI")
    print("4. Salir")
    
def Ingresar_persona(matriz):
    nombre = input("Ingrese el nombre: ")
    apellido = input("Ingrese el apellido: ")
    dni = input("Ingrese el DNI: ")
    telefono = input("Ingrese el telefono: ").split(",")
    hijos = input("Ingrese los nombre de los hijos: ").split(",")
    
    persona = [nombre, apellido, dni, telefono, hijos]
    matriz.append(persona)
    print("Persona ingresada exitosamente.")
    
def mostrar_persona(matriz):
    if not matriz:
        print("No hay personas Registrdas")
        return
    print("--- Personas Registradas ---")
    for persona in matriz:
        nombre,apellido,dni,telefono,hijos = persona
        print(f"Nombre: {nombre}, Apellido: {apellido}, DNI: {dni}, Telefono: {len(telefono)}, Hijos: {len(hijos)}")
    
    print("\nMatriz de datos:")
    for persona in matriz:
        print(persona)
        
def filtrar_persona(matriz):
    dni = input("Ingrese el DNI a buscar: ")
    for persona in matriz:
        if persona[2] == dni:
           nombre, apellido, _, telefonos, hijos = persona
           print(f"\nDATOS DE {nombre} {apellido}")
           print(f"DNI: {dni}, Teléfonos: {len(telefonos)} teléfono(s), Hijos: {len(hijos)}")
           return
    print("No se encontró una persona con ese DNI.")
    
def main():
    matriz = []
    while True:
        mostrar_menu()
        opcion = input("Seleccione una opció: ")
        if opcion == "1":
            Ingresar_persona(matriz)
        elif opcion == "2":
            mostrar_persona(matriz)
        elif opcion == "3":
            filtrar_persona(matriz)
        elif opcion == "4":
            print("Saliendo del Programa....")
            break
        else:
            print("Opcion no válida, por favor seleccione una opció válida.")
            
if __name__ == "__main__":
    main()