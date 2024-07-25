import { IAction } from "../../types";
import { warningDuration } from "../configs/durations";
import {
  actionInputClassName,
  actionWarningClassName,
  imageInputPickerClassName,
  imageInputPickerHiddenID,
} from "../configs/identifiers";
import {
  backgroundChangerTipText,
  imagePickerButtonText,
  imagePickerInputText,
  newErrorAlertText,
} from "../configs/texts";
import changeBackgroundImage from "../utils/changeBackgroundImage";
import createAlert from "../utils/createAlert";
import createElement from "../utils/createElement";

/**
 * Changes the background image of an existing HTML element that sits behind every UI element.
 */

const backgroundChangerAction: IAction = {
  name: "Change the background image",

  execute(actionBox: HTMLDivElement) {
    const imageInputPickerLabel: HTMLLabelElement = createElement<HTMLLabelElement>({
      elementName: "label",
      appendTo: actionBox,
      htmlProps: {
        className: `${actionInputClassName} ${imageInputPickerClassName}`,
        htmlFor: imageInputPickerHiddenID,
        textContent: imagePickerButtonText,
      },
    });

    const imageInputPickerHidden: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: actionBox,
      htmlProps: { type: "file", id: imageInputPickerHiddenID, accept: "image/*", style: { display: "none" } },
    });

    createElement({
      elementName: "p",
      appendTo: actionBox,
      htmlProps: { textContent: "- or -" },
    });

    const imageChangerByURLInput: HTMLInputElement = createElement<HTMLInputElement>({
      elementName: "input",
      appendTo: actionBox,
      htmlProps: { className: actionInputClassName, placeholder: imagePickerInputText },
    });

    createElement<HTMLParagraphElement>({
      elementName: "p",
      appendTo: actionBox,
      htmlProps: { className: actionWarningClassName, textContent: backgroundChangerTipText },
    });

    imageInputPickerHidden.onchange = () => initialiseImageReader(imageInputPickerHidden, imageInputPickerLabel);

    imageChangerByURLInput.onkeydown = (event: KeyboardEvent) => {
      const backgroundImageURL: string = imageChangerByURLInput.value.trim();
      if (event.code === "Enter" && backgroundImageURL !== "") {
        imageInputPickerLabel.textContent = imagePickerButtonText;
        imageInputPickerHidden.value = "";
        changeBackgroundImage(backgroundImageURL);
      }
    };
  },
};

function initialiseImageReader(imageInputPickerHidden: HTMLInputElement, imageInputPickerLabel: HTMLLabelElement) {
  if (imageInputPickerHidden.files === null || imageInputPickerHidden.files.length === 0) return;

  const chosenImage: File = imageInputPickerHidden.files[0];
  const imageReader = new FileReader();

  imageReader.readAsDataURL(chosenImage);
  imageReader.addEventListener("loadstart", () => {
    imageInputPickerLabel.textContent = "Loading image...";
  });

  imageReader.addEventListener("loadend", () => {
    // May only be string | null because reading was done in a Data URL format.
    const imageData: string | null = imageReader.result as string | null;

    if (imageData === null) {
      createAlert({ text: newErrorAlertText("image data could not be read"), timeout: warningDuration });
      return;
    }

    changeBackgroundImage(imageData);
    const imageExtension: string = chosenImage.name.split(".")[1] || "???";
    const shortenedImageName: string =
      chosenImage.name.length > 25 ? `(${chosenImage.name.slice(0, 25)}...).${imageExtension}` : chosenImage.name;

    imageInputPickerLabel.innerHTML =
      chosenImage !== null
        ? `${imagePickerButtonText} | Image name: ${
            chosenImage.name.length > 25
              ? `<span title="${chosenImage.name}" style="text-decoration: underline; cursor: help">${shortenedImageName}</span>`
              : chosenImage.name
          }`
        : imagePickerButtonText;
  });

  imageReader.addEventListener("error", (readerEvent: ProgressEvent<FileReader>) =>
    createAlert({
      text: newErrorAlertText(
        `image reader gave error${
          readerEvent.lengthComputable
            ? `, only ${((readerEvent.loaded / readerEvent.total) * 100).toPrecision(2)}% of image loaded`
            : ""
        }}`
      ),
      timeout: warningDuration,
    })
  );
}

export default backgroundChangerAction;
