export type DropdownProps = {
    onChange: (value: string) => void;
    onOpen: () => void;
    options: Array<any>
    labelKey?: string;
    valueKey?: string;
    disabled?: boolean;
    color?: string;
}