// Function to clean input data from possible script injection
function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

// Function that returns a html construct with the provided prop data
function constructBusinessMail({ name, email, message, phoneCall, phoneNumber }) {
	const escapedName = escapeHtml(name);
	const escapedEmail = escapeHtml(email);
	const escapedMessage = escapeHtml(message);
	const escapedPhoneNumber = phoneNumber && escapeHtml(phoneNumber);

	const callBack = phoneCall
		? `<h3 style="margin: 10px">Kontaktaufnahme:</h3>
		        <p style="margin: 10px">
					Rückruf gewünscht unter der ${escapedPhoneNumber}
		        </p>`
		: `<h3 style="margin: 10px">Kontaktaufnahme:</h3>
		        <p style="margin: 10px">
					Der Kunde wünscht die Kontaktaufnahme via Email
		        </p>`;

	// Create the HTML construct with the provided parameters
	const emailHTML = `
    <!DOCTYPE html>
<html
	xmlns="http://www.w3.org/1999/xhtml"
	xmlns:o="urn:schemas-microsoft-com:office:office">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="initial-scale=1.0" />
		<meta name="format-detection" content="telephone=no" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700;6..12,800&display=swap"
			rel="stylesheet" />
		<title>Fliesenleger Müller</title>

		<style type="text/css">
			body {
				margin: 0;
				padding: 0;
				font-family: 'Nunito Sans', sans-serif;
				color: #000 !important;
			}
			img {
				border: 0px;
				display: block;
			}

			.socialLinks {
				font-size: 6px;
			}
			.socialLinks a {
				display: inline-block;
			}

			.long-text p {
				margin: 1em 0px;
			}
			.long-text p:last-child {
				margin-bottom: 0px;
			}
			.long-text p:first-child {
				margin-top: 0px;
			}
		</style>
		<style type="text/css">
			/* yahoo, hotmail */
			.ExternalClass,
			.ExternalClass p,
			.ExternalClass span,
			.ExternalClass font,
			.ExternalClass td,
			.ExternalClass div {
				line-height: 100%;
			}
			.yshortcuts a {
				border-bottom: none !important;
			}
			.vb-outer {
				min-width: 0 !important;
			}
			.RMsgBdy,
			.ExternalClass {
				width: 100%;
				background-color: #3f3f3f;
			}

			/* outlook/office365 add buttons outside not-linked images and safari have 2px margin */
			[o365] button {
				margin: 0 !important;
			}

			/* outlook */
			table {
				mso-table-rspace: 0pt;
				mso-table-lspace: 0pt;
			}
			#outlook a {
				padding: 0;
			}
			img {
				outline: none;
				text-decoration: none;
				border: none;
				-ms-interpolation-mode: bicubic;
			}
			a img {
				border: none;
			}

			@media screen and (max-width: 600px) {
				table.vb-row {
					width: 95% !important;
				}

				.mobile-hide {
					display: none !important;
				}
				.mobile-textcenter {
					text-align: center !important;
				}

				.mobile-full {
					width: 100% !important;
					max-width: none !important;
				}
			}
			/* previously used also screen and (max-device-width: 600px) but Yahoo Mail doesn't support multiple queries */
		</style>
		<style type="text/css">
			#ko_textBlock_1 .links-color a,
			#ko_textBlock_1 .links-color a:link,
			#ko_textBlock_1 .links-color a:visited,
			#ko_textBlock_1 .links-color a:hover {
				color: #3f3f3f;
				color: #3f3f3f;
				text-decoration: underline;
			}

			#ko_sideArticleBlock_1 .links-color a,
			#ko_sideArticleBlock_1 .links-color a:link,
			#ko_sideArticleBlock_1 .links-color a:visited,
			#ko_sideArticleBlock_1 .links-color a:hover {
				color: #3f3f3f;
				color: #3f3f3f;
				text-decoration: underline;
			}

			.links-color a,
			.links-color a:link,
			.links-color a:visited,
			.links-color a:hover {
				color: #cccccc;
				color: #cccccc;
				text-decoration: underline;
			}
		</style>
	</head>
	<!--[if !(gte mso 15)]-->
	<body
		bgcolor="#3f3f3f"
		text="#919191"
		alink="#cccccc"
		vlink="#cccccc"
		style="margin: 0; padding: 0; background-color: #3f3f3f; color: #919191">
		<!--<![endif]-->
		<center>
			<table
				role="presentation"
				class="vb-outer"
				width="100%"
				cellpadding="0"
				border="0"
				cellspacing="0"
				bgcolor="#bfbfbf"
				id="ko_logoBlock_1"
				style="background-color: #bfbfbf">
				<tbody>
					<tr>
						<td
							class="vb-outer"
							align="center"
							valign="top"
							style="padding-left: 9px; padding-right: 9px; font-size: 0">
							<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
							[endif]--><!--    -->
							<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
								<table
									role="presentation"
									class="vb-row"
									border="0"
									cellpadding="0"
									cellspacing="9"
									bgcolor="#ffffff"
									width="570"
									style="
										border-collapse: collapse;
										width: 100%;
										background-color: #ffffff;
										max-width: 570px;
										-mru-width: 0px;
									">
									<tbody>
										<tr>
											<td
												align="center"
												valign="top"
												style="
													font-size: 0;
													padding: 0 9px;
													padding-top: 13px;
													padding-bottom: 13px;
												">
												<div
													style="
														vertical-align: top;
														width: 100%;
														max-width: 184px;
														-mru-width: 0px;
													">
													<table
														role="presentation"
														border="0"
														cellspacing="9"
														cellpadding="0"
														width="184"
														style="border-collapse: collapse; width: 100%">
														<tbody>
															<tr>
																<td
																	width="100%"
																	valign="top"
																	align="center"
																	class="links-color"
																	style="
																		padding: 9px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																		padding: 9px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	">
																	<!--[if (lte ie 8)]><div style="display: inline-block; width: 166px; -mru-width: 0px"><!
																	[endif]--><img
																		border="0"
																		hspace="0"
																		align="center"
																		vspace="0"
																		width="166"
																		style="
																			border: 0px;
																			display: block;
																			vertical-align: top;
																			height: auto;
																			margin: 0 auto;
																			font-size: 13px;
																			font-family: 'Nunito Sans', sans-serif;
																			width: 100%;
																			max-width: 100px;
																			height: auto;
																		"
																		src="https://res.cloudinary.com/drpmdiapv/image/upload/f_auto/v1693331577/fliesenleger-mueller/logo-mueller-dark_vn3rds"
																		alt="Firmenlogo" /><!--[if (lte ie 8)]></div><![endif]-->
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
			
			<table
				role="presentation"
				class="vb-outer"
				width="100%"
				cellpadding="0"
				border="0"
				cellspacing="0"
				bgcolor="#bfbfbf"
				id="ko_logoBlock_1"
				style="background-color: #bfbfbf">
				<tbody>
					<tr>
						<td
							class="vb-outer"
							align="center"
							valign="top"
							style="padding-left: 9px; padding-right: 9px; font-size: 0">
							<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
							[endif]--><!--    -->
							<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
								<table
									role="presentation"
									class="vb-row"
									border="0"
									cellpadding="0"
									cellspacing="9"
									bgcolor="#ffffff"
									width="570"
									style="
										border-collapse: collapse;
										width: 100%;
										background-color: #ffffff;
										max-width: 570px;
										-mru-width: 0px;
									">
									<tbody>
										<tr>
											<td
												align="center"
												valign="top"
												style="
													font-size: 0;
													padding: 0 9px;
													padding-top: 13px;
													padding-bottom: 13px;
												">
												<div
													style="
														vertical-align: top;
														width: 100%;
														max-width: 184px;
														-mru-width: 0px;
													">
													<table
														role="presentation"
														border="0"
														cellspacing="9"
														cellpadding="0"
														width="184"
														style="border-collapse: collapse; width: 100%">
														<tbody>
															<tr>
																<td
																	width="100%"
																	valign="top"
																	align="center"
																	class="links-color"
																	style="
																		padding: 9px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	">
																	<!--[if (lte ie 8)]><div style="display: inline-block; width: 166px; -mru-width: 0px"><!
																	[endif]--><img
																		border="0"
																		hspace="0"
																		align="center"
																		vspace="0"
																		width="166"
																		style="
																			border: 0px;
																			display: block;
																			vertical-align: top;
																			height: auto;
																			margin: 0 auto;
																			font-size: 13px;
																			font-family: 'Nunito Sans', sans-serif;
																			width: 100%;
																			height: auto;
																		"
																		src="https://res.cloudinary.com/drpmdiapv/image/upload/f_auto/v1693251004/fliesenleger-mueller/image-mail_utfuzg"
																		alt="Stern Mosaike mit gelber Umrandung" /><!--[if (lte ie 8)]></div><![endif]-->
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
						</td>
					</tr>
				</tbody>
			</table>

			<table
				role="presentation"
				class="vb-outer"
				width="100%"
				cellpadding="0"
				border="0"
				cellspacing="0"
				bgcolor="#bfbfbf"
				id="ko_titleBlock2_1"
				style="background-color: #bfbfbf">
				<tbody>
					<tr>
						<td
							class="vb-outer"
							align="center"
							valign="top"
							style="padding-left: 9px; padding-right: 9px; font-size: 0">
							<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
							[endif]--><!--
      -->
							<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
								<table
									role="presentation"
									class="vb-row"
									border="0"
									cellpadding="0"
									cellspacing="9"
									bgcolor="#ffffff"
									width="570"
									style="
										border-collapse: collapse;
										width: 100%;
										background-color: #ffffff;
										max-width: 570px;
										-mru-width: 0px;
									">
									<tbody>
										<tr>
											<td
												align="center"
												valign="top"
												style="
													font-size: 0;
													padding: 0 9px;
													padding-top: 13px;
													padding-bottom: 13px;
												">
												<div
													style="
														vertical-align: top;
														width: 100%;
														max-width: 552px;
														-mru-width: 0px;
													">
													<!--
        -->
													<table
														role="presentation"
														border="0"
														cellspacing="9"
														cellpadding="0"
														style="border-collapse: collapse; width: 100%"
														width="552">
														<tbody>
															<tr>
																<td
																	width="100%"
																	valign="top"
																	align="center"
																	style="
																		color: #000;
																		font-size: 18px;
																		font-weight: 700;
																		font-family: 'Nunito Sans', sans-serif;
																		text-align: center;
																		padding: 9px;
																		padding-top: 5px;
																		padding-bottom: 5px;
																	">
																	<span style="font-weight: 700"
																		>Kontaktformular eingegangen</span
																	>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
						</td>
					</tr>
				</tbody>
			</table>

			<table
				role="presentation"
				class="vb-outer"
				width="100%"
				cellpadding="0"
				border="0"
				cellspacing="0"
				bgcolor="#bfbfbf"
				id="ko_textBlock_1"
				style="background-color: #bfbfbf">
				<tbody>
					<tr>
						<td
							class="vb-outer"
							align="center"
							valign="top"
							style="padding-left: 9px; padding-right: 9px; font-size: 0">
							<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
							[endif]--><!--
      -->
							<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
								<table
									role="presentation"
									class="vb-row"
									border="0"
									cellpadding="0"
									cellspacing="9"
									bgcolor="#ffffff"
									width="570"
									style="
										border-collapse: collapse;
										width: 100%;
										background-color: #ffffff;
										max-width: 570px;
										-mru-width: 0px;
									">
									<tbody>
										<tr>
											<td
												align="center"
												valign="top"
												style="
													font-size: 0;
													padding: 0 9px;
													padding-top: 13px;
													padding-bottom: 13px;
												">
												<div
													style="
														vertical-align: top;
														width: 100%;
														max-width: 552px;
														-mru-width: 0px;
													">
													<!--
        -->
													<table
														role="presentation"
														border="0"
														cellspacing="9"
														cellpadding="0"
														style="border-collapse: collapse; width: 100%"
														width="552">
														<tbody>
															<tr>
																<td
																	class="long-text links-color"
																	width="100%"
																	valign="top"
																	align="left"
																	style="
																		font-weight: normal;
																		font-size: 13px;
																		font-family: 'Nunito Sans', sans-serif;
																		text-align: left;
																		line-height: normal;
																		display: grid;
																		grid-template-columns: 1fr 3fr;
																	">
																	<h3 style="margin: 10px">Name:</h3>
																	<p style="margin: 10px">
																		${escapedName}
																	</p>
																	<h3 style="margin: 10px">E-Mail:</h3>
																	<p style="margin: 10px">
																		${escapedEmail}
																	</p>
                                                                    ${callBack}
																	<h3 style="margin: 10px">Nachricht:</h3>
																	<p style="margin: 10px">
																		${escapedMessage}
																	</p>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
						</td>
					</tr>
				</tbody>
			</table>

			<table
				role="presentation"
				class="vb-outer"
				width="100%"
				cellpadding="0"
				border="0"
				cellspacing="0"
				bgcolor="#bfbfbf"
				id="ko_buttonBlock_1"
				style="background-color: #bfbfbf">
				<tbody>
					<tr>
						<td
							class="vb-outer"
							align="center"
							valign="top"
							style="padding-left: 9px; padding-right: 9px; font-size: 0">
							<!--[if (gte mso 9)|(lte ie 8)]><table role="presentation" align="center" border="0" cellspacing="0" cellpadding="0" width="570"><tr><td align="center" valign="top"><!
							[endif]--><!--
      -->
							<div style="margin: 0 auto; max-width: 570px; -mru-width: 0px">
								<table
									role="presentation"
									class="vb-row"
									border="0"
									cellpadding="0"
									cellspacing="9"
									bgcolor="#ffffff"
									width="570"
									style="
										border-collapse: collapse;
										width: 100%;
										background-color: #ffffff;
										max-width: 570px;
										-mru-width: 0px;
									">
									<tbody>
										<tr>
											<td align="center" valign="top" style="font-size: 0">
												<div
													style="
														vertical-align: top;
														width: 100%;
														max-width: 552px;
														-mru-width: 0px;
													">
													<!--
        -->
													<table
														role="presentation"
														border="0"
														cellspacing="9"
														cellpadding="0"
														style="border-collapse: collapse; width: 100%"
														width="552">
														<tbody>
															<tr>
																<td valign="top" align="center">
																	<table
																		role="presentation"
																		cellpadding="12"
																		border="0"
																		align="center"
																		cellspacing="0"
																		style="
																			border-spacing: 0;
																			mso-padding-alt: 12px 14px 12px 14px;
																		">
																		<tbody>
																			<tr>
																				<td
																					width="auto"
																					valign="middle"
																					align="center"
																					style="
																						text-align: center;
																						font-weight: normal;
																						font-size: 22px;
																					">
																					<p
																						style="
																							text-decoration: none;
																							font-weight: 500;
																							font-size: 10px;
																						">
																						!-- Dies ist eine automatisch generierte
																						Nachricht, bitte antworten Sie nicht auf diese
																						E-Mail --!
																					</p>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--
    --><!--[if (gte mso 9)|(lte ie 8)]></td></tr></table><![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</center>
		<!--[if !(gte mso 15)]-->
	</body>
	<!--<![endif]-->
</html>
  `;

	return emailHTML;
}

module.exports = constructBusinessMail;
