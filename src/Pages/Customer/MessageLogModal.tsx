import React from 'react';
import { createGlobalStyle } from '../../Theme/theme';
import { Portal } from 'reakit/Portal';
import { useDialogState, Dialog, DialogDisclosure, DialogBackdrop } from 'reakit/Dialog';
import { Button } from '../../Components/Button/Button';

export function ModalExample({ x }: any) {
	const dialog = useDialogState();

	return (
		<>
			<DialogWrapper></DialogWrapper>
			<DialogDisclosure as={Button} {...dialog}>
				Preview
			</DialogDisclosure>
			<Portal>
				<DialogBackdrop {...dialog} className="dialog__fade" />
			</Portal>
			<Dialog {...dialog} aria-label="Email Preview" className="dialog">
				<div className="dialog__header">Viesti esikatselu</div>
				<div className="dialog__body">
					<div>Aihe: {x}</div>
					<div>Esikatselu:</div>
					<div
						className="dialog__body__preview"
						dangerouslySetInnerHTML={{ __html: MockHtml }}
					></div>
				</div>
				<div className="dialog__footer">Täälläkin pitäisi olla sulkupainike</div>
			</Dialog>
		</>
	);
}

const MockHtml =
	'<head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /><title>Demystifying Email Design</title><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body style="margin: 0; padding: 0;">    <table border="0" cellpadding="0" cellspacing="0" width="100%">         <tr>            <td style="padding: 10px 0 30px 0;">                <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">                    <tr>                        <td align="center" bgcolor="#70bbd9" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">                            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/h1.gif" alt="Creating Email Magic" width="300" height="230" style="display: block;" />                        </td>                    </tr>                    <tr>                        <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">                            <table border="0" cellpadding="0" cellspacing="0" width="100%">                                <tr>                                    <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">                                        <b>Lorem ipsum dolor sit amet!</b>                                    </td>                                </tr>                                <tr>                                    <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                    </td>                                </tr>                                <tr>                                    <td>                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">                                            <tr>                                                <td width="260" valign="top">                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">                                                        <tr>                                                            <td>                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/left.gif" alt="" width="100%" height="140" style="display: block;" />                                                            </td>                                                        </tr>                                                        <tr>                                                            <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                                            </td>                                                        </tr>                                                    </table>                                                </td>                                                <td style="font-size: 0; line-height: 0;" width="20">                                                    &nbsp;                                                </td>                                                <td width="260" valign="top">                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">                                                        <tr>                                                            <td>                                                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284ight.gif" alt="" width="100%" height="140" style="display: block;" />                                                            </td>                                                        </tr>                                                        <tr>                                                            <td style="padding: 25px 0 0 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;">                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus adipiscing felis, sit amet blandit ipsum volutpat sed. Morbi porttitor, eget accumsan dictum, nisi libero ultricies ipsum, in posuere mauris neque at erat.                                                            </td>                                                        </tr>                                                    </table>                                                </td>                                            </tr>                                        </table>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                    <tr>                        <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">                            <table border="0" cellpadding="0" cellspacing="0" width="100%">                                <tr>                                    <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">                                        &reg; Someone, somewhere 2013<br/>                                        <a href="#" style="color: #ffffff;"><font color="#ffffff">Unsubscribe</font></a> to this newsletter instantly                                    </td>                                    <td align="right" width="25%">                                        <table border="0" cellpadding="0" cellspacing="0">                                            <tr>                                                <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">                                                    <a href="http://www.twitter.com/" style="color: #ffffff;">                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/tw.gif" alt="Twitter" width="38" height="38" style="display: block;" border="0" />                                                    </a>                                                </td>                                                <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>                                                <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">                                                    <a href="http://www.twitter.com/" style="color: #ffffff;">                                                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/fb.gif" alt="Facebook" width="38" height="38" style="display: block;" border="0" />                                                    </a>                                                </td>                                            </tr>                                        </table>                                    </td>                                </tr>                            </table>                        </td>                    </tr>                </table>            </td>        </tr>    </table></body></html>';

const DialogWrapper = createGlobalStyle`
	.dialog {
		position: fixed;
		top: 28px;
		left: 50%;
      width: 100%;
      max-width: 42rem;
		transform: translateX(-50%);
		border-radius: 0.25rem;
		max-height: calc(80vh - 56px);
		outline: 0;
		color: ${(p) => p.theme.text_color};
		z-index: 999;


      &__header {
         background: ${(p) => p.theme.menu_background_color};
         padding: .5rem 1.5rem;
         color: ${(p) => p.theme.text_color_nav};
      }

      &__body {
         background: ${(p) => p.theme.body_background_color};
         padding: 1.5rem;
         color: ${(p) => p.theme.text_color};
         max-height: 70vh;
         overflow: auto;

         &__preview {}

      }

      &__footer {
         background: ${(p) => p.theme.menu_background_color};
         padding: .5rem 1.5rem;
         color: ${(p) => p.theme.text_color_nav};
      }

		&:focus {
			box-shadow: ${(p) => p.theme.shadow.focus};
		}
	}
	.dialog__fade {
		background-color: rgba(0, 0, 0, 0.5);
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 999;
	}
`;
