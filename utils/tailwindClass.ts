// This functions is for the tailwind CSS framework CLASS.
export function tw(...classes: (false | null | undefined | string)[]): string {
    return classes.filter(Boolean).join(' ');
}