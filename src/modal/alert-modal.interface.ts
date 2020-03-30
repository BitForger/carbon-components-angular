export enum AlertModalType {
	default = "default",
	danger = "danger"
}

export interface AlertModalData {
	/**
	 * type of the modal
	 */
	type?: AlertModalType;
	/**
	 * Additional label shown over the modal
	 */
	label?: string;
	/**
	 * Primary title for the modal
	 */
	title?: string;
	/**
	 * Content for the modal body, could include HTML tags
	 */
	content?: string;
	/**
	 * Size of the modal to display.
	 */
	size?: "xs" | "sm" | "lg";
	/**
	 * Array of `ModalButton`s
	 */
	buttons?: Array<ModalButton>;
	/**
	 * Callback for non-specific close events. `return false;` to prevent the modal from closing
	 * Property trigger has a value of `overlay` or `close`
	 */
	close?: (trigger?: "overlay" | "close") => boolean;
}

export enum ModalButtonType {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
	ghost = "ghost",
	danger = "danger",
	danger_primary = "danger--primary"
}

export interface ModalButton {
	/**
	 * Display value of the button
	 */
	text: string;
	/**
	 * Optional unique ID for the button
	 */
	id?: string;
	/**
	 * Button type
	 */
	type?: ModalButtonType;
	/**
	 * Callback for the button `click` event
	 */
	click?: Function;
}
