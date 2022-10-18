type Class = new (...args: any) => any

export type ValueObjectMap = { [key: string]: any };

export type ValueType<T extends Class> = ConstructorParameters<T>[0];

export type ObjectInstanceTypes<Map extends ValueObjectMap, ChosenKeys> = {
    [Key in Extract<keyof Map, ChosenKeys>]: InstanceType<Map[Key]>
};
